ComplexDiagram(
  Sequence(
    NonTerminal('schema_definition', {href: '#schema_definition'}),
    ZeroOrMore(NonTerminal('definition', {href: '#definition'}))
  )
).addTo();
