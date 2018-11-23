ComplexDiagram(
  Sequence(
    NonTerminal('numerator', {href: '#number'}),
    Optional(Sequence('/', NonTerminal('denominator', {href: 'number'})), 'skip')
  )
).addTo();
