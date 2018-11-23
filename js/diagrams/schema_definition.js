ComplexDiagram(
  Sequence(
    Choice(0, 'schema', 'topic', 'vocabulary', 'transform'),
    NonTerminal('schema_name', {href: '#schema_name'}),
    Optional(NonTerminal('version_number', {href: '#version_number'})),
    ';'
  )
).addTo();
