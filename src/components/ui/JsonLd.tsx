interface JsonLdProps {
  schema: object;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: "<" is escaped so a string value cannot close the script tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
