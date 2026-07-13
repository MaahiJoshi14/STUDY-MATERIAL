#!/usr/bin/env node
import { parsePDFQuestions, categorizeQuestion } from '../src/lib/pdfParser.js';
import path from 'path';
import os from 'os';

console.log('🧪 Testing Engineering Physics Quiz Parser 🧪');
console.log('='.repeat(80));

async function testEngineeringPhysics() {
  try {
    // Path to your study-material-resources folder
    const resourcesPath = path.join(os.homedir(), 'Desktop', 'study-material-resources');
    const physicsPath = path.join(resourcesPath, '1st year btech', 'physics-cycle', 'engineering-physics', 'pyqs');
    
    console.log(`📂 Looking for PYQs in: ${physicsPath}`);
    
    // Find all PDF files in the pyqs folder
    const fs = await import('fs');
    const pdfFiles = [];
    
    if (fs.existsSync(physicsPath)) {
      const files = fs.readdirSync(physicsPath);
      for (const file of files) {
        if (file.toLowerCase().endsWith('.pdf')) {
          pdfFiles.push(path.join(physicsPath, file));
        }
      }
    }
    
    if (pdfFiles.length === 0) {
      console.log('❌ No PDF files found in engineering-physics pyqs folder');
      return;
    }

    console.log(`✅ Found ${pdfFiles.length} PYQ files!`);

    // Create a map to track similar questions by keywords
    const questionMap = new Map();

    // Process all PYQs for engineering-physics
    for (const pdfPath of pdfFiles) {
      const fileName = path.basename(pdfPath);
      console.log(`\n📄 Processing: ${fileName}`);
      try {
        const questions = await parsePDFQuestions(pdfPath);
        console.log(`   Found ${questions.length} questions in this file`);

        for (const q of questions) {
          // Create a hash from keywords to group similar questions
          const keywords = q.keywords || [];
          const hash = `${q.type}-${keywords.sort().join('-')}`;

          if (questionMap.has(hash)) {
            const existing = questionMap.get(hash);
            existing.frequency += 1;
          } else {
            questionMap.set(hash, {
              ...q,
              frequency: 1,
              source: fileName
            });
          }
        }
      } catch (err) {
        console.error(`   ❌ Error processing this file: ${err.message}`);
      }
    }

    // Convert the map to an array and categorize
    const parsedQuestions = Array.from(questionMap.values()).map(q => ({
      ...q,
      category: categorizeQuestion(q.frequency)
    }));

    // Sort by frequency (most asked first)
    parsedQuestions.sort((a, b) => b.frequency - a.frequency);

    // Display the results
    console.log(`\n🎉 Quiz parsing complete!`);
    console.log(`\n📊 Summary: ${parsedQuestions.length} unique questions found`);
    
    const mostAsked = parsedQuestions.filter(q => q.category === 'most-asked');
    const moderate = parsedQuestions.filter(q => q.category === 'moderately-asked');
    const canBeAsked = parsedQuestions.filter(q => q.category === 'can-be-asked');
    
    console.log(`   🔥 Most Asked: ${mostAsked.length} questions`);
    console.log(`   📈 Moderately Asked: ${moderate.length} questions`);
    console.log(`   🤔 Can Be Asked: ${canBeAsked.length} questions`);

    // Show example questions from each category
    console.log(`\n📝 Example Questions:`);
    if (mostAsked.length > 0) {
      console.log(`\n1. MOST ASKED (${mostAsked.length} questions):`);
      mostAsked.slice(0, 2).forEach((q, i) => {
        console.log(`   ${i + 1}. [${q.type.toUpperCase()}] (${q.frequency} times)`);
        console.log(`      ${q.question.substring(0, 120)}...`);
        if (q.note) {
          console.log(`      ${q.note}`);
        }
      });
    }

    if (moderate.length > 0) {
      console.log(`\n2. MODERATELY ASKED (${moderate.length} questions):`);
      moderate.slice(0, 2).forEach((q, i) => {
        console.log(`   ${i + 1}. [${q.type.toUpperCase()}] (${q.frequency} times)`);
        console.log(`      ${q.question.substring(0, 120)}...`);
        if (q.note) {
          console.log(`      ${q.note}`);
        }
      });
    }

    if (canBeAsked.length > 0) {
      console.log(`\n3. CAN BE ASKED (${canBeAsked.length} questions):`);
      canBeAsked.slice(0, 2).forEach((q, i) => {
        console.log(`   ${i + 1}. [${q.type.toUpperCase()}] (${q.frequency} times)`);
        console.log(`      ${q.question.substring(0, 120)}...`);
        if (q.note) {
          console.log(`      ${q.note}`);
        }
      });
    }

  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testEngineeringPhysics();