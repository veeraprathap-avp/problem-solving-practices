const fs = require('fs');
const path = require('path');

const problemsDir = path.join(__dirname, 'problems');
const files = fs.readdirSync(problemsDir).filter(f => f.endsWith('.js')).sort();

if (files.length === 0) {
  console.log('No problem files found in /problems folder.');
  process.exit(0);
}

const target = process.argv[2];

console.log('\n🚀 Practice problem solving Runner');

if (!target) {
  console.error('\n❌ Error: No file specified.');
  console.error('   Usage:  npm run run:file -- <filename>');
  console.error('   Example: npm run run:file -- two-sum\n');
  process.exit(1);
}

const matched = files.filter(f => f.includes(target));

if (matched.length === 0) {
  console.error(`\n❌ Error: No problem file found matching "${target}"`);
  console.error(`   Available files:\n${files.map(f => `     - ${f}`).join('\n')}\n`);
  process.exit(1);
}

matched.forEach(file => require(path.join(problemsDir, file)));

console.log('\n');
