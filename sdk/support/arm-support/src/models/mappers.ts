/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const Service: msRest.CompositeMapper = {
  serializedName: "Service",
  type: {
    name: "Composite",
    className: "Service",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        serializedName: "properties.resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProblemClassification: msRest.CompositeMapper = {
  serializedName: "ProblemClassification",
  type: {
    name: "Composite",
    className: "ProblemClassification",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityInput: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityInput",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityInput",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Microsoft.Support/supportTickets",
            "Microsoft.Support/communications"
          ]
        }
      }
    }
  }
};

export const CheckNameAvailabilityOutput: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityOutput",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityOutput",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContactProfile: msRest.CompositeMapper = {
  serializedName: "ContactProfile",
  type: {
    name: "Composite",
    className: "ContactProfile",
    modelProperties: {
      firstName: {
        required: true,
        serializedName: "firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        required: true,
        serializedName: "lastName",
        type: {
          name: "String"
        }
      },
      preferredContactMethod: {
        required: true,
        serializedName: "preferredContactMethod",
        type: {
          name: "String"
        }
      },
      primaryEmailAddress: {
        required: true,
        serializedName: "primaryEmailAddress",
        type: {
          name: "String"
        }
      },
      additionalEmailAddresses: {
        serializedName: "additionalEmailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      preferredTimeZone: {
        required: true,
        serializedName: "preferredTimeZone",
        type: {
          name: "String"
        }
      },
      country: {
        required: true,
        serializedName: "country",
        type: {
          name: "String"
        }
      },
      preferredSupportLanguage: {
        required: true,
        serializedName: "preferredSupportLanguage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceLevelAgreement: msRest.CompositeMapper = {
  serializedName: "ServiceLevelAgreement",
  type: {
    name: "Composite",
    className: "ServiceLevelAgreement",
    modelProperties: {
      startTime: {
        readOnly: true,
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      expirationTime: {
        readOnly: true,
        serializedName: "expirationTime",
        type: {
          name: "DateTime"
        }
      },
      slaMinutes: {
        readOnly: true,
        serializedName: "slaMinutes",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SupportEngineer: msRest.CompositeMapper = {
  serializedName: "SupportEngineer",
  type: {
    name: "Composite",
    className: "SupportEngineer",
    modelProperties: {
      emailAddress: {
        readOnly: true,
        serializedName: "emailAddress",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TechnicalTicketDetails: msRest.CompositeMapper = {
  serializedName: "TechnicalTicketDetails",
  type: {
    name: "Composite",
    className: "TechnicalTicketDetails",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuotaChangeRequest: msRest.CompositeMapper = {
  serializedName: "QuotaChangeRequest",
  type: {
    name: "Composite",
    className: "QuotaChangeRequest",
    modelProperties: {
      region: {
        serializedName: "region",
        type: {
          name: "String"
        }
      },
      payload: {
        serializedName: "payload",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuotaTicketDetails: msRest.CompositeMapper = {
  serializedName: "QuotaTicketDetails",
  type: {
    name: "Composite",
    className: "QuotaTicketDetails",
    modelProperties: {
      quotaChangeRequestSubType: {
        serializedName: "quotaChangeRequestSubType",
        type: {
          name: "String"
        }
      },
      quotaChangeRequestVersion: {
        serializedName: "quotaChangeRequestVersion",
        type: {
          name: "String"
        }
      },
      quotaChangeRequests: {
        serializedName: "quotaChangeRequests",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "QuotaChangeRequest"
            }
          }
        }
      }
    }
  }
};

export const SupportTicketDetails: msRest.CompositeMapper = {
  serializedName: "SupportTicketDetails",
  type: {
    name: "Composite",
    className: "SupportTicketDetails",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      supportTicketId: {
        serializedName: "properties.supportTicketId",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      problemClassificationId: {
        required: true,
        serializedName: "properties.problemClassificationId",
        type: {
          name: "String"
        }
      },
      problemClassificationDisplayName: {
        readOnly: true,
        serializedName: "properties.problemClassificationDisplayName",
        type: {
          name: "String"
        }
      },
      severity: {
        required: true,
        serializedName: "properties.severity",
        type: {
          name: "String"
        }
      },
      enrollmentId: {
        readOnly: true,
        serializedName: "properties.enrollmentId",
        type: {
          name: "String"
        }
      },
      require24X7Response: {
        serializedName: "properties.require24X7Response",
        type: {
          name: "Boolean"
        }
      },
      contactDetails: {
        required: true,
        serializedName: "properties.contactDetails",
        type: {
          name: "Composite",
          className: "ContactProfile"
        }
      },
      serviceLevelAgreement: {
        serializedName: "properties.serviceLevelAgreement",
        type: {
          name: "Composite",
          className: "ServiceLevelAgreement"
        }
      },
      supportEngineer: {
        serializedName: "properties.supportEngineer",
        type: {
          name: "Composite",
          className: "SupportEngineer"
        }
      },
      supportPlanType: {
        readOnly: true,
        serializedName: "properties.supportPlanType",
        type: {
          name: "String"
        }
      },
      title: {
        required: true,
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      problemStartTime: {
        serializedName: "properties.problemStartTime",
        type: {
          name: "DateTime"
        }
      },
      serviceId: {
        required: true,
        serializedName: "properties.serviceId",
        type: {
          name: "String"
        }
      },
      serviceDisplayName: {
        readOnly: true,
        serializedName: "properties.serviceDisplayName",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      },
      createdDate: {
        readOnly: true,
        serializedName: "properties.createdDate",
        type: {
          name: "DateTime"
        }
      },
      modifiedDate: {
        readOnly: true,
        serializedName: "properties.modifiedDate",
        type: {
          name: "DateTime"
        }
      },
      technicalTicketDetails: {
        serializedName: "properties.technicalTicketDetails",
        type: {
          name: "Composite",
          className: "TechnicalTicketDetails"
        }
      },
      quotaTicketDetails: {
        serializedName: "properties.quotaTicketDetails",
        type: {
          name: "Composite",
          className: "QuotaTicketDetails"
        }
      }
    }
  }
};

export const CommunicationDetails: msRest.CompositeMapper = {
  serializedName: "CommunicationDetails",
  type: {
    name: "Composite",
    className: "CommunicationDetails",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      communicationType: {
        readOnly: true,
        serializedName: "properties.communicationType",
        type: {
          name: "String"
        }
      },
      communicationDirection: {
        readOnly: true,
        serializedName: "properties.communicationDirection",
        type: {
          name: "String"
        }
      },
      sender: {
        serializedName: "properties.sender",
        type: {
          name: "String"
        }
      },
      subject: {
        required: true,
        serializedName: "properties.subject",
        type: {
          name: "String"
        }
      },
      body: {
        required: true,
        serializedName: "properties.body",
        type: {
          name: "String"
        }
      },
      createdDate: {
        readOnly: true,
        serializedName: "properties.createdDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ServiceErrorDetail: msRest.CompositeMapper = {
  serializedName: "ServiceErrorDetail",
  type: {
    name: "Composite",
    className: "ServiceErrorDetail",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceError: msRest.CompositeMapper = {
  serializedName: "ServiceError",
  type: {
    name: "Composite",
    className: "ServiceError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceErrorDetail"
            }
          }
        }
      }
    }
  }
};

export const ExceptionResponse: msRest.CompositeMapper = {
  serializedName: "ExceptionResponse",
  type: {
    name: "Composite",
    className: "ExceptionResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ServiceError"
        }
      }
    }
  }
};

export const UpdateContactProfile: msRest.CompositeMapper = {
  serializedName: "UpdateContactProfile",
  type: {
    name: "Composite",
    className: "UpdateContactProfile",
    modelProperties: {
      firstName: {
        serializedName: "firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        type: {
          name: "String"
        }
      },
      preferredContactMethod: {
        serializedName: "preferredContactMethod",
        type: {
          name: "String"
        }
      },
      primaryEmailAddress: {
        serializedName: "primaryEmailAddress",
        type: {
          name: "String"
        }
      },
      additionalEmailAddresses: {
        serializedName: "additionalEmailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      preferredTimeZone: {
        serializedName: "preferredTimeZone",
        type: {
          name: "String"
        }
      },
      country: {
        serializedName: "country",
        type: {
          name: "String"
        }
      },
      preferredSupportLanguage: {
        serializedName: "preferredSupportLanguage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateSupportTicket: msRest.CompositeMapper = {
  serializedName: "UpdateSupportTicket",
  type: {
    name: "Composite",
    className: "UpdateSupportTicket",
    modelProperties: {
      severity: {
        serializedName: "severity",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      contactDetails: {
        serializedName: "contactDetails",
        type: {
          name: "Composite",
          className: "UpdateContactProfile"
        }
      }
    }
  }
};

export const OperationsListResult: msRest.CompositeMapper = {
  serializedName: "OperationsListResult",
  type: {
    name: "Composite",
    className: "OperationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const ServicesListResult: msRest.CompositeMapper = {
  serializedName: "ServicesListResult",
  type: {
    name: "Composite",
    className: "ServicesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Service"
            }
          }
        }
      }
    }
  }
};

export const ProblemClassificationsListResult: msRest.CompositeMapper = {
  serializedName: "ProblemClassificationsListResult",
  type: {
    name: "Composite",
    className: "ProblemClassificationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProblemClassification"
            }
          }
        }
      }
    }
  }
};

export const SupportTicketsListResult: msRest.CompositeMapper = {
  serializedName: "SupportTicketsListResult",
  type: {
    name: "Composite",
    className: "SupportTicketsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SupportTicketDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationsListResult: msRest.CompositeMapper = {
  serializedName: "CommunicationsListResult",
  type: {
    name: "Composite",
    className: "CommunicationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};