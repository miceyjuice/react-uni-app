export interface IFormikValues {
  handleChange?: Function;
  values: {
    categories: {
      expertise: string;
      specialities: string[];
      admission: string[];
      counties: string;
    };
    panelInformations: {
      hourlyFee: string;
      termsAndConditions: string;
      services: string;
      correspondants: string[];
    };
    proposals: {
      name: string[];
      entity: string[];
      location: string[];
      expertise: string[];
      date: string[];
      firm: string[];
    };
    internalReviews: {
      name: string[];
      entity: string[];
      location: string[];
      expertise: string[];
      date: string[];
    };
    feeAmount: {
      year: number[];
      cost: string[];
      totalAmount: string[];
      lawFirm: string[];
    };
  };
}

export const startingData: IFormikValues = {
  values: {
    categories: {
      expertise: "Mergers and aquisition",
      specialities: ["Cross border operation", "Transaction over 500M€/S"],
      admission: ["Paris bar association", "London bar association"],
      counties: "Tunisia",
    },
    panelInformations: {
      hourlyFee: "610€/hour (Negociated)",
      termsAndConditions: "Monthly 10k€ retainer - see with Jeanny Smith",
      services: "Corporate M&A and international acquisitions",
      correspondants: ["Leanne Graham", "Leanne Graham"],
    },
    proposals: {
      name: ["Operation m50", "Operation bondi", "Op. Latandre"],
      entity: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
      location: ["France", "USA", "Italia"],
      expertise: ["expertise1", "expertise2", "expertise3"],
      date: [
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      ],
      firm: ["Racine", "Clifford chance", "SVZ"],
    },
    internalReviews: {
      name: ["Operation m50", "Operation bondi", "Op. Latandre"],
      entity: ["Renault Brjoisoi", "Renault HQ", "Renault Codasda"],
      location: ["France", "USA", "Italia"],
      expertise: ["expertise1", "expertise2", "expertise3"],
      date: [
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        new Date().toLocaleString([], {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      ],
    },
    feeAmount: {
      year: [2019, 2018, 2017],
      cost: ["CS 153", "CS 153", "CS 47"],
      totalAmount: ["3 500 €", "9 500 €", "10 500 €"],
      lawFirm: ["Clifford chance", "Linklaters", "Linklaters"],
    },
  },
};
