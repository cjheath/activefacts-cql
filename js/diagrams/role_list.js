ComplexDiagram(
  Sequence(
    Choice(0, Skip(), 'a', 'one'),
    NonTerminal('term_or_unary', {href: '#term_or_unary'}),
    ZeroOrMore(Sequence(
	Choice(1, ',', 'and'),
	Choice(0, Skip(), 'a', 'one'),
	NonTerminal('term_or_unary', {href: '#term_or_unary'})
    ))
  )
).addTo();
