#!/usr/bin/env node
import { parseAllPYQsToQuiz } from '../src/lib/quizDataParser.js';

// Note: Since this is a module import, we need to make sure our files are properly set up
console.log('Testing Quiz Parser...');
console.log('This may take a while as it downloads and parses PDFs from ImageKit');
console.log('='.repeat(80));

async function testParser() {
  try {
    // For testing, let's just try to parse one subject first
    const quizData = await parseAllPYQsToQuiz();
    
    console.log(`\nSuccessfully parsed ${quizData.length} subjects!`);
    
    // Show summary
    for (const subjectData of quizData) {
      console.log(`\n📚 ${subjectData.subjectName} (${subjectData.cycleOrBranch})`);
      console.log(`   Total questions: ${subjectData.totalQuestions}`);
      console.log(`   Most asked: ${subjectData.mostAskedCount}`);
      console.log(`   Moderately asked: ${subjectData.moderatelyAskedCount}`);
      console.log(`   Can be asked: ${subjectData.canBeAskedCount}`);
      
      // Show first 2 questions as example
      if (subjectData.questions.length > 0) {
        console.log('\n   Example questions:');
        for (let i = 0; i < Math.min(2, subjectData.questions.length); i++) {
          const q = subjectData.questions[i];
          console.log(`   ${i + 1}. [${q.type.toUpperCase()}] ${q.question.substring(0, 100)}...`);
          if (q.note) {
            console.log(`      ${q.note}`);
          }
          console.log(`      Asked ${q.frequencyAsked} times (${q.category})`);
        }
      }
    }
    
  } catch (error) {
    console.error('Error testing parser:', error);
  }
}

testParser();