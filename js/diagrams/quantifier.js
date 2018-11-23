ComplexDiagram(
  Choice(3,
    'some',   /* existential quantifier */
    'that',   /* reference to previous existential */
    'which',  /* Used to project a variable from a query */
    'one',
    'no',
    Sequence('exactly', NonTerminal('quantity', {href: '#quantity'})),
    Sequence(
      'at', 'least', NonTerminal('quantity', {href: '#quantity'}),
      Optional(Sequence(
	'and', 'at', 'most', NonTerminal('quantity', {href: '#quantity'})
      ), 'skip')
    ),
    Sequence(
      'at', 'most', NonTerminal('quantity', {href: '#quantity'})
    ),
    Sequence(
      'from', NonTerminal('numeric_range', {href: '#numeric_range'})
    )
  )
).addTo();
