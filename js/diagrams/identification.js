ComplexDiagram(
  Sequence(
    'identified', 'by',
    Choice(0,
      Sequence(
	'its',
	Choice(0,
	  NonTerminal('term', {href: '#term'}),
	  NonTerminal('implicit_value_type_name', {href: '#term'})
	),
	NonTerminal('value_type_parameters', {href: '#value_type_parameters'})
      ),
      NonTerminal('role_list', {href: '#role_list'})
    )
  )
).addTo();
