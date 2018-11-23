ComplexDiagram(
  Choice(0,
    Sequence(
      Comment('setting a parameter'),
      Choice(0,
	Sequence(
	  'with',
	  NonTerminal('parameter_name', {href: '#id'}),
	  'as',
	  NonTerminal('parameter_literal', {href: '#parameter_literal'})
	),
	Sequence(
	  NonTerminal('parameter_name', {href: '#id'}),
	  ':',
	  NonTerminal('parameter_literal', {href: '#parameter_literal'})
	)
      )
    ),
    Stack(
      Sequence(
	'accepts',
	NonTerminal('parameter_name', {href: '#id'}),
	'as',
	NonTerminal('value_type_name', {href: '#term'})
      ),
      Sequence(
	Optional(Sequence(
	  'restricted', 'to',
	  NonTerminal('parameter_restriction', {href: '#parameter_restriction'})
	), 'skip')
      )
    ),
    Sequence(
      'restricts',
      NonTerminal('parameter_name', {href: '#id'}),
      'to',
      NonTerminal('parameter_restriction', {href: '#parameter_restriction'})
    )
  )
).addTo();
