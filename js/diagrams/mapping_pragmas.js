ComplexDiagram(
  Optional(
    Sequence(
      '[',
      NonTerminal('mapping_pragma', {href: '#mapping_pragma'}),
      ZeroOrMore(Sequence(
	',',
	NonTerminal('mapping_pragma', {href: '#mapping_pragma'})
      )),
      ']'
    ),
    'skip'
  )
).addTo();
