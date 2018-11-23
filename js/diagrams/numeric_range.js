ComplexDiagram(
  Choice(0,
    Sequence(
      NonTerminal('number', {href: '#number'}),
      Optional(Sequence('..', Optional(NonTerminal('number', {href: '#number'}), 'skip')), 'skip')
    )
  )
).addTo();
