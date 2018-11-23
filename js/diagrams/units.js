ComplexDiagram(
  Sequence(
    OneOrMore(Sequence(
      NonTerminal('unit_name', {href: '#unit_name'}),
      Optional(Sequence('^', NonTerminal('number', {href: '#number'})), 'skip')
    )),
    Optional(Sequence(
      '/',
      OneOrMore(Sequence(
	NonTerminal('unit_name', {href: '#unit_name'}),
	Optional(Sequence('^', NonTerminal('number', {href: '#number'})), 'skip')
      ))
    ), 'skip')
  )
).addTo();
