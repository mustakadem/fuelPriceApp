declare module 'fake-tag' {
  const value: (
    args: TemplateStringsArray,
    ...placeholders: unknown[]
  ) => string;
  export default value;
}
