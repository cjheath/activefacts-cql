ComplexDiagram(
  Choice(1,
    Sequence(NonTerminal('literal', {href: '#literal'}), Optional(NonTerminal('unit_name', {href: '#id'}), 'skip')),
    NonTerminal('variable', {href: '#variable'}),
    Sequence('(', NonTerminal('expression', {href: '#expression'}), ')')
  )
).addTo();
