ComplexDiagram(
  Sequence(
    Comment('A hyphenated id may not contain any space'),
    NonTerminal('id', {href: '#id'}), Optional(Sequence('-', NonTerminal('id', {href: '#id'})), 'skip')
  )
).addTo();
