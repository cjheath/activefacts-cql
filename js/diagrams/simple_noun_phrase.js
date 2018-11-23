ComplexDiagram(
  Sequence(
    Optional(NonTerminal('role_quantifier', {href: '#role_quantifier'}), 'skip'),
    NonTerminal('variable', {href: '#variable'}),
    Choice(0,
      Skip(),
      Sequence(
	NonTerminal('literal', {href: '#literal'}),
	Optional(NonTerminal('unit', {href: '#unit'}), 'skip')
      ),
      Sequence(
	NonTerminal('value_constraint', {href: '#value_constraint'}),
	NonTerminal('enforcement', {href: '#enforcement'})
      )
    ),
    Optional(NonTerminal('objectification_step', {href: '#objectification_step'}), 'skip')
  )
).addTo();
