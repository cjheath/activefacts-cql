#
#       ActiveFacts CQL loader.
#       Use Polyglot to patch things so you can *require* a CQL file and have it define a Ruby module.
#
# Copyright (c) 2009 Clifford Heath. Read the LICENSE file.
#
require 'polyglot'
require 'stringio'

require 'activefacts/support'
require 'activefacts/input/cql'

if (require 'activefacts/generators/ruby' rescue nil)
  module ActiveFacts
    # This class has a load method for Polyglot to tell it how to _require_ a CQL file.
    # The CQL file is parsed to a vocabulary constellation, which is generated
    # to Ruby code and eval'd, making the generated classes available.
    # To make this Loader available, simply
    #   require 'activefacts/cql'
    class CQLLoader
      def self.load(file) #:nodoc:
        trace "Loading #{file}" do
          vocabulary = ActiveFacts::Input::CQL.readfile(file)

          ruby = StringIO.new
          @dumper = ActiveFacts::Generators::RUBY.new(vocabulary.constellation)
          @dumper.generate(ruby)
          ruby.rewind
          eval ruby.read, ::TOPLEVEL_BINDING
        end
      end
    end

    Polyglot.register('cql', CQLLoader)
  end
end
