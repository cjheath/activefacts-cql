ComplexDiagram(
  Sequence(
    '{',
    NonTerminal('range', {href: '#range'}),
    ZeroOrMore(Sequence(
      ',', NonTerminal('range', {href: '#range'}),
    )),
    '}'
  )
).addTo();
