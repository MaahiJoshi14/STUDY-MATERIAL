$filePath = 'c:\Users\Admin\study-material\src\data\studyMaterial.ts'
$content = Get-Content $filePath -Raw -Encoding UTF8

# Find the start of chemistry-cycle block
$startPattern = "  {`r`n    id: 'chemistry-cycle'"
$startIdx = $content.IndexOf("  {`r`n    id: 'chemistry-cycle'")
if ($startIdx -eq -1) {
    # Try without CR
    $startIdx = $content.IndexOf("  {`n    id: 'chemistry-cycle'")
}
Write-Host "Start index: $startIdx"

# Find the closing of the chemistry cycle block (the };  before BRANCHES section)
$endPattern = "];`r`n`r`n// "
$endIdx = $content.IndexOf($endPattern, $startIdx)
if ($endIdx -eq -1) {
    $endPattern = "];`n`n// "
    $endIdx = $content.IndexOf($endPattern, $startIdx)
}
Write-Host "End index: $endIdx"

if ($startIdx -ge 0 -and $endIdx -gt $startIdx) {
    # The block to replace is from startIdx to endIdx + length of "];"
    $beforeBlock = $content.Substring(0, $startIdx)
    $afterBlock = $content.Substring($endIdx + 2) # skip "];"
    Write-Host "Before block length: $($beforeBlock.Length)"
    Write-Host "After block starts with: $($afterBlock.Substring(0, 50))"
    Write-Host "Success - found block to replace"
} else {
    Write-Host "FAILED to find block - searching for pattern..."
    # Try another approach - find line by line
    $lines = $content -split "`r`n"
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i] -match "chemistry-cycle") {
            Write-Host "Found 'chemistry-cycle' at line $i : $($lines[$i])"
        }
        if ($lines[$i] -match "BRANCHES") {
            Write-Host "Found 'BRANCHES' at line $i : $($lines[$i])"
        }
    }
}
