100.times do
  Song.create(
    title: Faker::Demographic.demonym + ' ' + Faker::HarryPotter.character + ' ' + Faker::Job.field,
    artist: Faker::RockBand.name
  )
end