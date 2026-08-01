import assert from 'node:assert/strict';
import test from 'node:test';

import {
  parseComparisonRows,
  parseLocalizedItems,
  parsePromptRows,
} from './marketing-content';

test('parseLocalizedItems turns translated title/body pairs into safe records', () => {
  assert.deepEqual(
    parseLocalizedItems(
      'Upload~~Choose a clear portrait|||Prompt~~Describe one change'
    ),
    [
      { title: 'Upload', description: 'Choose a clear portrait' },
      { title: 'Prompt', description: 'Describe one change' },
    ]
  );
});

test('parseLocalizedItems rejects malformed translated content', () => {
  assert.throws(
    () => parseLocalizedItems('Missing body'),
    /Malformed localized item/
  );
});

test('parsePromptRows preserves colons and punctuation inside prompts', () => {
  assert.deepEqual(
    parsePromptRows(
      'Background~~Place this person at a night market: warm light.|||Outfit~~Replace the jacket with a navy blazer.'
    ),
    [
      {
        useCase: 'Background',
        prompt: 'Place this person at a night market: warm light.',
      },
      {
        useCase: 'Outfit',
        prompt: 'Replace the jacket with a navy blazer.',
      },
    ]
  );
});

test('parseComparisonRows groups a label and two comparison values', () => {
  assert.deepEqual(
    parseComparisonRows(
      'Setup~~No install~~Local nodes and models|||Control~~Focused workflow~~Full graph control'
    ),
    [
      { label: 'Setup', values: ['No install', 'Local nodes and models'] },
      { label: 'Control', values: ['Focused workflow', 'Full graph control'] },
    ]
  );
});

test('parseComparisonRows rejects rows that omit a comparison value', () => {
  assert.throws(
    () => parseComparisonRows('Setup~~No install'),
    /Malformed comparison row/
  );
});
