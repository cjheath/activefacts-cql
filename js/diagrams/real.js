ComplexDiagram(
  Sequence(
    Choice(1, '-', Skip(), '+'),
    '[1-9]',
    ZeroOrMore('[0-9]'),
    Optional(NonTerminal('fraction', {href: '#fraction'}), 'skip'),
    Optional(NonTerminal('exponent', {href: '#exponent'}), 'skip')
  )
).addTo();
