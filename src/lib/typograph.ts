const NBSP = " ";

// Prepositions, conjunctions and particles that must not be left hanging at the end of a line
const shortWords =
  "а|без|в|во|для|до|за|и|из|к|ко|на|над|не|ни|но|о|об|от|по|под|при|про|с|со|у";

const hangingWord = new RegExp(`(^|[\\s(«])(${shortWords}) `, "giu");

export function typograph(text: string): string {
  // Runs twice because adjacent short words ("и в") share the space between them
  return text
    .replace(hangingWord, `$1$2${NBSP}`)
    .replace(hangingWord, `$1$2${NBSP}`);
}
