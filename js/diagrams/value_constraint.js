ComplexDiagram(
  Sequence(
    'restricted', 'to',
    Choice(0,
      Sequence(
	NonTerminal('range_list', {href: '#range_list'}),
	NonTerminal('units', {href: '#units'})
      ),
      NonTerminal('regular_expression', {href: '#regular_expression'})
    ),
    Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
  )
).addTo();
