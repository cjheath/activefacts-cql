ComplexDiagram(
  Sequence(
    '\'',
    ZeroOrMore(NonTerminal('string_char', {href: '#string_char'})),
    '\''
  )
).addTo();
