ComplexDiagram(
  Sequence(
    Choice(0,
      Sequence(
	Optional(NonTerminal('unit_coefficient', {href: '#unit_coefficient'})),
	Optional(NonTerminal('units', {href: '#units'})),
	Optional(NonTerminal('unit_offset', {href: '#unit_offset'})),
	'converts', 'to',
	NonTerminal('unit_name', {href: '#id'}),
	Optional(Sequence(
	  '/', NonTerminal('unit_name', {href: '#id'})
	))
      ),
      Sequence(
	NonTerminal('unit_name', {href: '#id'}),
	Optional(Sequence(
	  '/', NonTerminal('unit_name', {href: '#id'})
	)),
	'converts', 'to',
	Optional(NonTerminal('unit_coefficient', {href: '#unit_coefficient'})),
	Optional(NonTerminal('units', {href: '#units'})),
	Optional(NonTerminal('unit_offset', {href: '#unit_offset'}))
      )
    ),
    Choice(0,
      Skip(),
      'approximately',
      Sequence('ephemera', NonTerminal('url', {href: '#url'}))
    )
  )
).addTo();
