import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Base from "../components/Base";

export default function FarmingTechniques() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Base>
			<Typography variant="h4" sx={{ marginBottom: "50px" }}>
				Different Farming Techniques
			</Typography>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						INTENSIVE FARMING
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Intensive farming, also known as intensive farming (as opposed to
						extensive farming) and industrial farming, is a form of modern
						farming involving both crops and animals, with higher input and
						output levels per cubic unit of agricultural land. A low fallow
						ratio, higher use of inputs such as capital and labor, and higher
						crop yields per unit of land area are characterized. In one or more
						respects, most commercial agriculture is intensive. Often referred
						to as industrial agriculture, forms that rely heavily on industrial
						methods are characterized by inventions designed to increase yield.
						Techniques include the planting of several crops each year the
						reduction of fallow-year frequency and the improvement of cultivars.
						Increased use of fertilizers, plant growth regulators, and
						pesticides, and mechanized modern farming are also included,
						regulated by enhanced and more comprehensive growing conditions
						research, including weather, soil, water, weeds, and pests.
						Intensive farms are common and rapidly prevalent globally in
						developing nations.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						AGRIBUSINESS
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Agribusiness is the agricultural production sector that includes the
						production, safety, selling, and promotion of the commodity to meet
						the needs of the customers. The word is a farming and business
						portmanteau and was invented by John Davis and Ray Goldberg in 1957.
						This includes modern farming, breeding, crop production (farming or
						contract farming), distribution, agricultural equipment,
						manufacturing and supply of seeds, as well as marketing and retail
						sales. The agribusiness system involves all agents of the food and
						fiber value chain and those organizations that control it. The term
						‘agribusiness’ applies to the variety of activities and disciplines
						covered by modern food production within the agricultural industry.
						There are academic degrees specialized in agribusiness, agribusiness
						agencies, trade associations for agribusiness, and journals for
						agribusiness. Agribusiness is a sector that encourages the
						development of the agricultural sector, which is central to the
						growth of the economy. It continues to play a crucial role in
						developed countries’ development, too. Agricultural production can
						theoretically be increased by agribusiness, which is why governments
						also give subsidies to agricultural enterprises. Agricultural
						practices also lead to improving the food security system and the
						sustainable development of food, as well as the income of the
						majority of the poor in developing countries. The operations,
						however, increase greenhouse gas emissions and lead to global
						warming, which is why innovation is critical for the sector to
						tackle these problems.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						ORGANIC FARMING
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Organic farming is an agricultural method that developed in response
						to rapidly evolving farming practices early in the 20th century.
						Globally certified organic farming accounts for 70 million hectares.
						Today, organic farming continues to be grown by different
						organizations. The use of organic fertilizers such as compost
						manure, green manure, and bone meal is established, and emphasis is
						put on techniques such as crop rotation and companion planting.
						Biological management of pests, mixed production, and the promotion
						of insect predators are encouraged. Organic requirements are
						intended to encourage the use of substances that exist naturally
						while banning or strictly restricting synthetic substances.
						Naturally occurring pesticides such as pyrethrin and rotenone, for
						example, are required, while synthetic fertilizers and pesticides
						are typically prohibited. For example, copper sulfate, elemental
						sulfur, and Ivermectin are synthetic substances that are permitted.
						It is forbidden to use genetically modified organisms,
						nanomaterials, human waste sludge, plant growth regulators,
						hormones, and antibiotics in livestock husbandry.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography sx={{ width: "33%", flexShrink: 0 }}>
						Sustainable agriculture
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Sustainable agriculture is sustainable farming, which means meeting
						the existing food and textile needs of society without sacrificing
						the capacity of present or future generations to fulfill their
						needs. It can be based on an understanding of ecosystem services. To
						improve the sustainability of agriculture, there are several
						methods. It is important to establish flexible business processes
						and agricultural practices while developing agriculture in the sense
						of sustainable food systems. Agriculture has an immense
						environmental footprint, playing a major role in causing climate
						change, water shortages, land destruction, deforestation, and other
						processes; it is simultaneously causing environmental changes and
						being affected by these changes. Creating sustainable food systems
						contributes to the survival of the human population. For instance,
						the development of sustainable food systems based on sustainable
						agriculture is one of the best ways of mitigating climate change.
						Sustainable agriculture offers a possible solution to allow
						agricultural systems, under changing environmental conditions, to
						feed a rising population.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Base>
	);
}
