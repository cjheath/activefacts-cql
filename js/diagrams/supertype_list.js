ComplexDiagram(
  Sequence(
    NonTerminal('term', {href: '#term'}),
    ZeroOrMore(Sequence(
      Choice(0, ',', 'and'),
      NonTerminal('term', {href: '#term'})
    )),
    Optional(NonTerminal('identification', {href: '#identification'}), 'skip')
  )
).addTo();
