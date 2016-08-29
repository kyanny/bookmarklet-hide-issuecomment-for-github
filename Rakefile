require 'erb'

task :default do
  system 'bookmarklet src.js bookmarklet.js'
  @bookmarklet = File.read 'bookmarklet.js'
  template = File.read 'index.html.erb'
  html = ERB.new(template).result
  File.write 'index.html', html
end
