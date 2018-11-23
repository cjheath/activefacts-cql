ComplexDiagram(
  Stack(
    Sequence(
      Choice(0, 'each', Skip()),
      NonTerminal('term', {href: '#term'})
    ),
    Sequence(
      Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
      'is', 'written', 'as',
      Choice(1, Skip(), 'a', 'an'),
      NonTerminal('term', {href: '#term'})
    ),
    Sequence(
      NonTerminal('value_type_parameters', {href: '#value_type_parameters'}),
      Optional(Sequence('in', NonTerminal('units', {href: '#units'})))
    ),
    Sequence(
      Optional(NonTerminal('auto_assignment', {href: '#auto_assignment'})),
      Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
    ),
    Sequence(
      Optional(Sequence(
	NonTerminal('value_constraint', {href: '#value_constraint'}),
	NonTerminal('enforcement', {href: '#enforcement'})
      ))
    ),
    Sequence(
      Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
      Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
    )
  )
).addTo();
