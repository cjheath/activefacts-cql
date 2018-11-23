ComplexDiagram(
  Sequence(
    Choice(1, '-', Skip(), '+'),
    '0',
    NonTerminal('fraction', {href: '#fraction'}),
    Optional(NonTerminal('exponent', {href: '#exponent'}), 'skip')
  )
).addTo();
