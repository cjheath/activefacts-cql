source 'https://rubygems.org'

# Specify your gem's dependencies in activefacts-cql.gemspec
gemspec

if ENV['PWD'] =~ %r{\A/Users/cjh/work/activefacts}
  gem 'activefacts-api', path: '/Users/cjh/work/activefacts-new/api'
  gem 'activefacts-metamodel', path: '/Users/cjh/work/activefacts-new/metamodel'
  # gem 'activefacts-metamodel', git: 'git://github.com/cjheath/activefacts-metamodel.git'
else
  gem 'activefacts-metamodel'
end
