<p>
A term also allows zero or more leading adjectives and/or trailing adjectives.
Leading adjectives are indicated by a hyphen after the first adjective,
and trailing adjectives are indicated by a hyphen before the last adjective.
This makes it complicated because (like a linking word) an adjective may be hyphenated.
If adjectives are introduced by a hyphenated word, the hyphen is doubled instead of being adjacent.
Accordingly, there are very precise rules about where spaces and hyphens are allowed inside terms.
</p>
<script>
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
