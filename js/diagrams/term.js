ComplexDiagram(
  Stack(
    Sequence(
      Comment('leading adjective'),
      Choice(0,
	Skip(),
	Sequence(
	  NonTerminal('id', {href: '#id'}),
	  '-',
	  Optional(Sequence(
	    NonTerminal('space', {href: '#space'}),
	    ZeroOrMore(NonTerminal('hyphenated_adj', {href: '#hyphenated_adj'}))
	  ), 'skip')
	),
	Sequence(
	  NonTerminal('id', {href: '#id'}),
	  '--',
	  NonTerminal('space', {href: '#space'}),
	  NonTerminal('id', {href: '#id'}),
	  ZeroOrMore(
	    NonTerminal('hyphenated_adj', {href: '#hyphenated_adj'}),
	  )
	)
      ),
    ),
    Sequence(
      Comment('the object type name'),
      OneOrMore(NonTerminal('id', {href: '#id'})),
    ),
    Sequence(
      Comment('trailing adjective'),
      Choice(0,
	Skip(),
	Sequence(
	  Optional(Sequence(
	    ZeroOrMore(NonTerminal('hyphenated_adj', {href: '#hyphenated_adj'})),
	    NonTerminal('space', {href: '#space'})
	  ), 'skip'),
	  '-',
	  NonTerminal('id', {href: '#id'})
	),
	Sequence(
	  Optional(Sequence(
	    ZeroOrMore(NonTerminal('hyphenated_adj', {href: '#hyphenated_adj'})),
	    NonTerminal('space', {href: '#space'})
	  ), 'skip'),
	  NonTerminal('id', {href: '#id'}),
	  NonTerminal('space', {href: '#space'}),
	  '--',
	  NonTerminal('id', {href: '#id'})
	)
      )
    )
  )
).addTo();
