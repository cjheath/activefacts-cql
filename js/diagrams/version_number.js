ComplexDiagram(
  Sequence(
    'integer', '.', 'integer', '.', 'integer',
    Optional(Sequence('-', 'integer', ZeroOrMore(Sequence('.', 'integer'))), 'skip')
  )
).addTo();
