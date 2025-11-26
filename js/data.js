const speciesData = {
    koala: {
        name: "Koala", 
        type: "animal",
        scientificName: "Phascolarctos cinereus",
        size: "60-85cm",
        weight: "4-15kg",
        habitat: "Eucalyptus forests of eastern Australia",
        conservationStatus: "Vulnerable", 
        threats: "Deforestation, bushfires, disease",
        anecdote: "Koalas are the only animals that eat eucalyptus leaves exclusively. They sleep up to 22 hours a day!",
        linkGreenIT: "Deforestation for data centers and infrastructure destroys koala habitats. By choosing eco-designed websites and green hosting, we reduce pressure on Australian forests.",
        actions: "Reduce paper consumption by going digital responsibly, choose cloud providers that don't contribute to deforestation, support reforestation projects.",
        image: "images/koala.jpg"
    },
    
    eucalyptus: {
        name: "Eucalyptus",
        type: "plant",
        scientificName: "Eucalyptus globulus",
        size: "Up to 60m",
        weight: "N/A",
        habitat: "Australia, Tasmania, and introduced worldwide",
        conservationStatus: "Least Concern",
        threats: "Bushfires, climate change, invasive species",
        anecdote: "Eucalyptus trees can grow up to 2 meters per year and are vital to koala survival as their only food source.",
        linkGreenIT: "Eucalyptus forests are cleared for urban expansion and infrastructure. Choosing renewable energy data centers helps preserve these ecosystems.",
        actions: "Support forest conservation projects, choose eco-hosting providers that don't contribute to deforestation, optimize website performance to reduce energy consumption.",
        image: "images/eucalyptus.jpg"
    },
    
    polarBear: {
        name: "Polar Bear", 
        type: "animal",
        scientificName: "Ursus maritimus",
        size: "2-3m",
        weight: "350-700kg",
        habitat: "Arctic sea ice and coastal areas",
        conservationStatus: "Vulnerable", 
        threats: "Climate change, melting ice caps, pollution",
        anecdote: "Polar bears can swim for days without rest, covering over 600km. Their fur is actually transparent, not white!",
        linkGreenIT: "Data centers worldwide consume 1% of global electricity, contributing to climate change that melts Arctic ice and destroys polar bear habitats.",
        actions: "Reduce energy consumption of devices, use energy-efficient data centers, turn off unused equipment to fight global warming.",
        image: "images/polar-bear.jpg"
    },
    
    goldenToad: {
        name: "Golden Toad",
        type: "animal",
        scientificName: "Incilius periglenes",
        size: "4-5cm",
        weight: "3-7g",
        habitat: "Cloud forests of Costa Rica (extinct since 1989)",
        conservationStatus: "Extinct",
        threats: "Climate change, habitat loss, fungal disease",
        anecdote: "The golden toad was discovered in 1964 and declared extinct by 2004, making it one of the first casualties of climate change.",
        linkGreenIT: "Rising global temperatures from CO2 emissions contribute to amphibian extinctions. Digital infrastructure's energy consumption accelerates this warming.",
        actions: "Minimize cloud storage usage, delete unused emails and files to reduce server energy consumption, choose green web hosting.",
        image: "images/harfang.jpg"
    },
    
    bee: {
        name: "Bee",
        type: "animal",
        scientificName: "Apis mellifera",
        size: "1.2-1.5cm",
        weight: "0.1g",
        habitat: "Worldwide, in diverse ecosystems",
        conservationStatus: "Vulnerable",
        threats: "Pesticides, habitat loss, climate change, diseases",
        anecdote: "A single bee can visit up to 5,000 flowers in a day and produce only 1/12 teaspoon of honey in its lifetime.",
        linkGreenIT: "Industrial agriculture driven by technological demands destroys pollinator habitats. Reducing e-waste and supporting sustainable tech helps preserve bee populations.",
        actions: "Recycle electronic devices properly, reduce pesticide use in data center landscaping, support organic farming through sustainable tech choices.",
        image: "images/abeille.jpg"
    },
    
    giantPanda: {
        name: "Giant Panda",
        type: "animal",
        scientificName: "Ailuropoda melanoleuca",
        size: "1.2-1.9m",
        weight: "70-120kg",
        habitat: "Mountain forests of central China",
        conservationStatus: "Vulnerable",
        threats: "Habitat loss, low reproduction rate, bamboo die-off",
        anecdote: "Giant pandas spend 12-16 hours a day eating bamboo and can consume up to 38kg daily. They have a 'thumb' to grip bamboo!",
        linkGreenIT: "Deforestation for urban development and infrastructure threatens panda habitats. Energy-efficient computing reduces pressure on Chinese forests.",
        actions: "Choose energy-efficient devices, support carbon offset programs, reduce paper consumption to preserve bamboo forests.",
        image: "images/giant-panda.jpg"
    },
    
    lynx: {
        name: "Lynx",
        type: "animal",
        scientificName: "Lynx lynx",
        size: "80-130cm",
        weight: "18-30kg",
        habitat: "Boreal forests of Europe, Asia, and North America",
        conservationStatus: "Least Concern",
        threats: "Habitat fragmentation, hunting, road mortality",
        anecdote: "Lynx can leap up to 7 meters horizontally and have exceptional hearing that can detect prey under thick snow.",
        linkGreenIT: "Forest fragmentation from infrastructure development disrupts lynx territories. Minimizing digital infrastructure footprint helps preserve wildlife corridors.",
        actions: "Support wildlife corridor projects, reduce streaming quality to lower energy demands, choose compact data centers that minimize land use.",
        image: "images/lynx.jpg"
    },
    
    orangutan: {
        name: "Orangutan",
        type: "animal",
        scientificName: "Pongo pygmaeus",
        size: "1.2-1.5m",
        weight: "50-90kg",
        habitat: "Rainforests of Borneo and Sumatra",
        conservationStatus: "Critically Endangered",
        threats: "Deforestation for palm oil, illegal pet trade, habitat loss",
        anecdote: "Orangutans share 97% of their DNA with humans and are among the most intelligent primates, using tools and building nests daily.",
        linkGreenIT: "Palm oil plantations for tech manufacturing destroy orangutan habitats. Choosing conflict-free electronics and sustainable materials helps protect them.",
        actions: "Buy electronics from companies committed to sustainable sourcing, extend device lifespan, support rainforest conservation.",
        image: "images/ourang-outan.jpg"
    },
    
    greenTurtle: {
        name: "Green Turtle",
        type: "animal",
        scientificName: "Chelonia mydas",
        size: "1-1.5m",
        weight: "65-130kg",
        habitat: "Tropical and subtropical oceans worldwide",
        conservationStatus: "Endangered",
        threats: "Plastic pollution, ocean warming, coastal development, bycatch",
        anecdote: "Green turtles can migrate over 2,600km between feeding and nesting sites and can hold their breath for up to 5 hours while sleeping.",
        linkGreenIT: "E-waste pollution in oceans and warming from energy consumption threaten turtle nesting beaches. Responsible e-waste disposal is critical.",
        actions: "Recycle electronics properly, reduce video streaming to lower ocean warming, support ocean cleanup initiatives.",
        image: "images/marine-turtle.jpg"
    },
    
    coral: {
        name: "Coral / Orange Spotted Filefish",
        type: "animal",
        scientificName: "Oxymonacanthus longirostris",
        size: "Coral: varies / Fish: 10-12cm",
        weight: "N/A / 20-30g",
        habitat: "Coral reefs of Indo-Pacific",
        conservationStatus: "Vulnerable",
        threats: "Ocean acidification, warming seas, pollution, overfishing",
        anecdote: "Orange spotted filefish exclusively eat coral polyps and their survival is directly linked to coral reef health. Corals are actually animals, not plants!",
        linkGreenIT: "Data centers' CO2 emissions contribute to ocean acidification and warming, bleaching coral reefs. Reducing digital carbon footprint helps preserve marine ecosystems.",
        actions: "Minimize cloud storage, use energy-efficient streaming settings, support marine conservation projects through green tech choices.",
        image: "images/corals.jpg"
    },
    
    whaleShark: {
        name: "Whale Shark",
        type: "animal",
        scientificName: "Rhincodon typus",
        size: "12-18m",
        weight: "15,000-20,000kg",
        habitat: "Tropical and warm temperate oceans",
        conservationStatus: "Endangered",
        threats: "Ship strikes, fishing nets, marine pollution, climate change",
        anecdote: "Whale sharks are the largest fish in the world and can live over 100 years. Despite their size, they're filter feeders eating only plankton.",
        linkGreenIT: "Shipping routes for tech components and ocean warming from energy consumption threaten whale sharks. Sustainable supply chains help protect them.",
        actions: "Choose locally manufactured electronics, reduce unnecessary online purchases to minimize shipping emissions, support ocean conservation.",
        image: "images/whale-shark.jpg"
    },
    
    asianElephant: {
        name: "Asian Elephant",
        type: "animal",
        scientificName: "Elephas maximus",
        size: "2-3.5m",
        weight: "3,000-5,000kg",
        habitat: "Forests and grasslands of South and Southeast Asia",
        conservationStatus: "Endangered",
        threats: "Habitat loss, human-wildlife conflict, poaching",
        anecdote: "Asian elephants can recognize themselves in mirrors, showing high intelligence. They use infrasound to communicate over distances up to 10km.",
        linkGreenIT: "Infrastructure development and mining for tech minerals destroy elephant habitats. Extending device lifespan reduces mining pressure.",
        actions: "Keep devices longer, repair instead of replacing, choose conflict-free electronics, support habitat conservation.",
        image: "images/asian-elephant.jpg"
    },
    
    africanElephant: {
        name: "African Elephant",
        type: "animal",
        scientificName: "Loxodonta africana",
        size: "3-4m",
        weight: "4,000-7,000kg",
        habitat: "Savannas and forests of sub-Saharan Africa",
        conservationStatus: "Endangered",
        threats: "Poaching for ivory, habitat loss, human-wildlife conflict",
        anecdote: "African elephants are the largest land animals and can consume up to 150kg of vegetation daily. They have the longest pregnancy of any mammal: 22 months!",
        linkGreenIT: "Mining for rare earth metals in tech devices destroys African elephant habitats. Recycling electronics reduces mining demand.",
        actions: "Recycle old electronics at certified e-waste facilities, avoid unnecessary tech upgrades, support anti-poaching technology initiatives.",
        image: "images/savannah-elephant.jpg"
    },
    
    quiverTree: {
        name: "Quiver Tree",
        type: "plant",
        scientificName: "Aloe dichotoma",
        size: "7-9m",
        weight: "N/A",
        habitat: "Arid regions of Namibia and South Africa",
        conservationStatus: "Vulnerable",
        threats: "Climate change, drought, overgrazing",
        anecdote: "Quiver trees can live for over 300 years. San people historically used their branches as quivers for arrows, hence the name.",
        linkGreenIT: "Rising temperatures from global CO2 emissions make arid regions uninhabitable for quiver trees. Data center energy consumption contributes to this warming.",
        actions: "Use energy-efficient cooling for tech devices, support renewable energy data centers, reduce unnecessary cloud computing.",
        image: "images/aloe-dichotoma.jpg"
    },
    
    mountainGorilla: {
        name: "Mountain Gorilla",
        type: "animal",
        scientificName: "Gorilla beringei beringei",
        size: "1.4-1.8m",
        weight: "135-220kg",
        habitat: "Mountain forests of Central Africa",
        conservationStatus: "Endangered",
        threats: "Habitat loss, poaching, disease transmission from humans",
        anecdote: "Mountain gorillas share 98.3% of their DNA with humans. They live in tight family groups led by a silverback male.",
        linkGreenIT: "Mining for coltan (used in smartphones) destroys gorilla habitats in Congo. Recycling phones reduces demand for conflict minerals.",
        actions: "Buy certified conflict-free electronics, recycle old phones, extend device lifespan to reduce mining pressure.",
        image: "images/gorille-des-montagnes.jpg"
    },
    
    adeliePenguin: {
        name: "Adélie Penguin",
        type: "animal",
        scientificName: "Pygoscelis adeliae",
        size: "46-71cm",
        weight: "3.6-6kg",
        habitat: "Antarctic coast and surrounding islands",
        conservationStatus: "Least Concern (declining)",
        threats: "Climate change, krill overfishing, ice loss",
        anecdote: "Adélie penguins can dive up to 175m deep and hold their breath for 6 minutes. They walk up to 300km across ice to reach their breeding colonies.",
        linkGreenIT: "Global warming from energy consumption melts Antarctic ice, threatening penguin colonies. Green computing helps slow ice loss.",
        actions: "Reduce energy consumption of devices, choose renewable energy providers, minimize data transfers to lower emissions.",
        image: "images/manchot-adelie.jpeg"
    },
    
    caspianSeal: {
        name: "Caspian Seal",
        type: "animal",
        scientificName: "Pusa caspica",
        size: "1.2-1.5m",
        weight: "50-90kg",
        habitat: "Caspian Sea",
        conservationStatus: "Endangered",
        threats: "Pollution, habitat degradation, hunting, disease",
        anecdote: "Caspian seals are the only marine mammals in the Caspian Sea. Their population has declined by 90% in the past century.",
        linkGreenIT: "Oil extraction for energy (including data center power) pollutes the Caspian Sea. Transitioning to renewable energy helps protect seal habitats.",
        actions: "Support renewable energy data centers, reduce fossil fuel dependency in tech manufacturing, minimize energy waste.",
        image: "images/caspian-seal.webp"
    },
    
    censkysAmeiva: {
        name: "Censky's Ameiva",
        type: "animal",
        scientificName: "Ameiva cineracea",
        size: "15-20cm",
        weight: "20-40g",
        habitat: "Caribbean islands and coastal areas",
        conservationStatus: "Least Concern",
        threats: "Habitat loss, invasive species, climate change",
        anecdote: "This lizard species colonized Caribbean islands by rafting on debris after hurricanes, showing remarkable adaptability.",
        linkGreenIT: "Sea level rise from climate change threatens coastal habitats. Reducing digital energy consumption helps slow coastal erosion.",
        actions: "Optimize website performance, use efficient coding practices, support coastal conservation through sustainable tech.",
        image: "images/censkys-ameiva.jpg"
    },
    
    snowLeopard: {
        name: "Snow Leopard",
        type: "animal",
        scientificName: "Panthera uncia",
        size: "1-1.3m (plus 80-100cm tail)",
        weight: "22-55kg",
        habitat: "Mountain ranges of Central and South Asia",
        conservationStatus: "Vulnerable",
        threats: "Poaching, habitat loss, climate change, human-wildlife conflict",
        anecdote: "Snow leopards can leap up to 15 meters in a single bound! Their long, thick tail helps them balance and keeps them warm in freezing temperatures.",
        linkGreenIT: "Climate change pushes snow leopards to higher altitudes as lower areas warm. Data center emissions contribute to mountain ecosystem disruption.",
        actions: "Choose energy-efficient cloud services, reduce unnecessary data storage, support mountain conservation initiatives.",
        image: "images/snow-leopard.webp"
    },
    
    spekesGazelle: {
        name: "Speke's Gazelle",
        type: "animal",
        scientificName: "Gazella spekei",
        size: "95-105cm",
        weight: "15-25kg",
        habitat: "Arid grasslands and scrublands of Horn of Africa",
        conservationStatus: "Endangered",
        threats: "Habitat loss, hunting, civil unrest, drought",
        anecdote: "Speke's gazelles have an inflatable nose sac that amplifies alarm calls. They're critically endangered with fewer than 300 individuals in the wild.",
        linkGreenIT: "Desertification accelerated by climate change destroys gazelle habitats. Reducing tech energy consumption helps slow ecosystem degradation.",
        actions: "Minimize streaming quality in non-critical situations, use dark mode to save energy, support renewable energy initiatives.",
        image: "images/gazelle.webp"
    }
};






