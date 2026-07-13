export interface RecentActivityItem {
  id: string; // can be year (e.g., "year-2"), cycleId, branchId, subjectId
  type: 'year' | 'cycle' | 'branch' | 'subject';
  title: string;
  year: string;
  cover: string;
  explorePath: string;
  timestamp: number;
}

const STORAGE_KEY = 'muj_recent_activity';

export function getRecentActivity(): RecentActivityItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const items = JSON.parse(data);
      // Add default type for older items without it
      return items.map((item: any) => ({
        type: item.type || 'subject',
        ...item
      }));
    }
  } catch (e) {
    console.error('Failed to parse recent activity', e);
  }
  return [];
}

export function logRecentActivity(item: Omit<RecentActivityItem, 'timestamp'>) {
  try {
    const current = getRecentActivity();
    // Remove if already exists to move to top
    const filtered = current.filter(activity => activity.id !== item.id);
    // Add to top with current timestamp
    const updated = [
      {
        ...item,
        timestamp: Date.now()
      },
      ...filtered
    ].slice(0, 8); // Keep up to 8 recent items

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save recent activity', e);
  }
}
