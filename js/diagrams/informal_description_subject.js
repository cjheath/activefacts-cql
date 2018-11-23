ComplexDiagram(
  Choice(0,
    Sequence('each', NonTerminal('term', {href: '#term'})),
    Sequence(
      'when',
      OneOrMore(Choice(0,
	  NonTerminal('simple_noun_phrase', {href: '#simple_noun_phrase'}),
	  NonTerminal('linking_word', {href: '#linking_word'})
      )),
    ','),
  )
).addTo();
