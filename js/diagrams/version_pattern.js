ComplexDiagram(
  Sequence(
    'integer',
    Optional(Sequence('.', 'integer',
      Optional(Sequence('.', 'integer',
	Optional(Sequence('-', 'integer', ZeroOrMore(Sequence('.', 'integer'))))
      ))
    ))
  )
).addTo();
