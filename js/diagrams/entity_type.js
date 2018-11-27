ComplexDiagram(
  Stack(
    Sequence(
      Choice(0, 'each', Skip()),
      NonTerminal('term', {href: '#term'}),
      Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
      Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip')
    ),
    Sequence(
      Choice(0,
	Sequence('is', Optional('independent'), NonTerminal('identification', {href: '#identification'})),
	Sequence(
	  'is', 'a', 'kind', 'of',
	  Optional('independent', 'skip'),
	  NonTerminal('supertype_list', {href: '#supertype_list'})
	)
      )
    ),
    Sequence(
      Optional(NonTerminal('mapping_pragmas', {href: '#mapping_pragmas'}), 'skip'),
      Optional(NonTerminal('context_note', {href: '#context_note'}), 'skip'),
      Optional(Sequence('where', NonTerminal('reading_clauses', {href: '#reading_clauses'})), 'skip'),
      ';'
    )
  )
).addTo();
