function pairs(value: string) {
  return value.split('|||').map((item) => {
    const separator = item.indexOf('~~');
    if (separator < 1 || separator >= item.length - 2) {
      throw new Error(`Malformed localized item: ${item}`);
    }
    return [
      item.slice(0, separator).trim(),
      item.slice(separator + 2).trim(),
    ] as const;
  });
}

export function parseLocalizedItems(value: string) {
  return pairs(value).map(([title, description]) => ({ title, description }));
}

export function parsePromptRows(value: string) {
  return pairs(value).map(([useCase, prompt]) => ({ useCase, prompt }));
}

export function parseComparisonRows(value: string) {
  return value.split('|||').map((row) => {
    const parts = row.split('~~').map((part) => part.trim());
    if (parts.length !== 3 || parts.some((part) => !part)) {
      throw new Error(`Malformed comparison row: ${row}`);
    }
    return {
      label: parts[0]!,
      values: [parts[1]!, parts[2]!] as [string, string],
    };
  });
}
