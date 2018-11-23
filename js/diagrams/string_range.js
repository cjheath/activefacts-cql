ComplexDiagram(
  Choice(0,
    Sequence(
      NonTerminal('string', {href: '#string'}),
      Optional(Sequence('..', Optional(NonTerminal('string', {href: '#string'}), 'skip')), 'skip')
    )
  )
).addTo();
