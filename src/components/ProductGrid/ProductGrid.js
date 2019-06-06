import React from "react";
import { Component } from "react";
import ProductSummary from "../ProductSummary/ProductSummary";

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productId: "1391191",
          type: "product",
          title: "Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White",
          code: "88701901",
          averageRating: 3.6364,
          reviews: 11,
          price: {
            was: "",
            then1: "",
            then2: "",
            now: "219.00",
            uom: "",
            currency: "GBP"
          },
          image: "//johnlewis.scene7.com/is/image/JohnLewis/233326789?",
          additionalServices: [
            "2 year guarantee included",
            "5 years Added Care for your home appliance (includes guarantee period) £100.00"
          ],
          displaySpecialOffer: "",
          promoMessages: {
            priceMatched: "",
            offer: "",
            customPromotionalMessage: "",
            bundleHeadline: "",
            customSpecialOffer: {}
          },
          nonPromoMessage: "",
          defaultSkuId: "233326789",
          colorSwatches: [],
          colorSwatchSelected: 0,
          colorWheelMessage: "",
          outOfStock: false,
          emailMeWhenAvailable: false,
          availabilityMessage: "",
          compare: true,
          fabric: "",
          swatchAvailable: true,
          categoryQuickViewEnabled: false,
          swatchCategoryType: "",
          brand: "Indesit",
          ageRestriction: 0,
          isInStoreOnly: false,
          isMadeToMeasure: false,
          isBundle: false,
          isProductSet: false,
          promotionalFeatures: [
            {
              title:
                "Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White installation guide",
              iconUrl:
                "//johnlewis.scene7.com/is/image/JohnLewis/electrical_med_icon?",
              linkUrl:
                "http://johnlewis.scene7.com/is/content/JohnLewis/233326789mnl1pdf",
              description:
                "Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White installation guide",
              longDescription:
                "Indesit DIF 04B1 Ecotime Fully Integrated Dishwasher, White installation guide"
            },
            {
              title: "Rated A+ for energy",
              iconUrl:
                "//johnlewis.scene7.com/is/image/JohnLewis/energy_a_plus_ico?",
              linkUrl:
                "http://www.johnlewis.com/buying-guides/energy-efficiency-guide",
              description: "Rated A+ for energy",
              longDescription: ""
            },
            {
              title: "Click here! Product Tour",
              iconUrl:
                "//johnlewis.scene7.com/is/image/JohnLewis/producttour_170512_ico?",
              linkUrl:
                "http://isitetv.com/en062124193003068134159184209234-p4jl.htm",
              description: "Click here! Product Tour",
              longDescription: ""
            },
            {
              title:
                "Disposal and installation is not available online for this product. Please call 0345 604 8835 to order this product and arrange these services - view opening hours.",
              iconUrl: "",
              linkUrl:
                "http://johnlewis.scene7.com/is/content/JohnLewis/contact_centre_opening_hours_d2cpdf ",
              description: "",
              longDescription:
                'Disposal and installation services are not available online for this product. Please call 0345 604 8835 to order this product and arrange these services - <a href="http://johnlewis.scene7.com/is/content/JohnLewis/contact_centre_opening_hours_d2cpdf">view opening hours</a>'
            }
          ],
          features: [],
          quickAddToBasket: {
            simpleAddToBasket: true
          },
          dynamicAttributes: {
            timeremainingindicator: "NO",
            integratedorfreestanding: "Integrated",
            energyconsumptionpercycle: "1.04kWh/cycle",
            cutlerybasket: "Basket",
            dishwashersize: "Full",
            waterconsumptionstandardcycle: "11L",
            saltlevelindicator: "YES",
            floodprotection: "YES",
            dryingsystem: "Natural",
            estimatedannualenergyconsumption: "295kWh",
            automaticloadadjustment: "NO",
            noiselevel: "49dB",
            digitaldisplay: "NO",
            delicatewash: "NO",
            quickwash: "NO",
            homearea: "Clean",
            timerdelay: "NO",
            childlock: "NO",
            dryingperformance: "A",
            estimatedannualwaterconsumption: "3080L",
            homeappliancetype: "Dishwashers",
            programsequenceindicator: "NO",
            adjustableracking: "YES",
            washperformance: "A",
            noofprograms: "4",
            placesettings: "13",
            rinseaidindicator: "YES"
          },
          directorate: "Electronics & Home Technology Directorat",
          releaseDateTimestamp: 0
        }
      ]
    };
    // var initialProducts = props.products ? props.products : this.productList;
    // const productList = ;
  }

  render() {
    return (
      <ul className="grid1">
        {this.state.products.map((product, index) => {
          return (
            <li key={index}>
              <ProductSummary index={index} product={product} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProductGrid;
