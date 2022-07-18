/* tslint:disable:quotemark */
// This code is generated!
export default {
    bridge: {
        inputExtensionLengthDescription: {
            default: "Select the size of the extension range from which VIER Cognitive Voice Gateway should select a phone number from.",
            enUS: "Select the size of the extension range from which VIER Cognitive Voice Gateway should select a phone number from.",
            deDE: "Wählen Sie die Größe des Durchwahlen-Bereiches, aus dem VIER Cognitive Voice Gateway eine Rufnummer wählen soll.",
        },
        inputExtensionLengthLabel: {
            default: "Extension Length",
            enUS: "Extension Length",
            deDE: "Durchwahl-Länge",
        },
        inputHeadNumberDescription: {
            default: "Enter the prefix of the phone number the call should be forwarded to.",
            enUS: "Enter the prefix of the phone number the call should be forwarded to.",
            deDE: "Geben Sie die Vorwahl der Rufnummer ein, an die der Anruf weitergeleitet werden soll.",
        },
        inputHeadNumberLabel: {
            default: "Phone Number Prefix",
            enUS: "Phone Number Prefix",
            deDE: "Rufnummernvorwahl",
        },
        inputMaxDigitsDescription: {
            default: "Enter the maximum amount of digits the phone number can have. If set, the input ends once the maximum has been reached.",
            enUS: "Enter the maximum amount of digits the phone number can have. If set, the input ends once the maximum has been reached.",
            deDE: "Geben Sie ein, wie viele Ziffern die Rufnummer maximal haben darf. Wenn diese Option aktiviert ist, endet die Eingabe, sobald die maximale Anzahl erreicht ist.",
        },
        nodeLabel: {
            default: "Forward Call to a Contact Center",
            enUS: "Forward Call to a Contact Center",
            deDE: "Anruf an ein Contact Center weiterleiten",
        },
        nodeSummary: {
            default: "Forward the call to a contact center for agent assistance",
            enUS: "Forward the call to a contact center for agent assistance",
            deDE: "Anruf an ein Contact Center zur Unterstützung durch eine:n Agent:in weiterleiten",
        },
    },
    forward: {
        inputDestinationNumberDescription: {
            default: "Enter the phone number you want to forward the call to (with country code, e.g. +49721480848680).",
            enUS: "Enter the phone number you want to forward the call to (with country code, e.g. +49721480848680).",
            deDE: "Geben Sie die Rufnummer ein, an die weitergeleitet werden soll (mit Ländervorwahl, z. B. +49721480848680).",
        },
        inputDestinationNumberLabel: {
            default: "Destination Phone Number",
            enUS: "Destination Phone Number",
            deDE: "Ziel-Rufnummer",
        },
        nodeLabel: {
            default: "Forward Call",
            enUS: "Forward Call",
            deDE: "Anruf weiterleiten",
        },
        nodeSummary: {
            default: "Forward the call to a different destination",
            enUS: "Forward the call to a different destination",
            deDE: "Anruf an ein anderes Ziel weiterleiten",
        },
        sectionAdditionalDataLabel: {
            default: "Data",
            enUS: "Data",
            deDE: "Daten",
        },
        sectionAdditionalSettingsLabel: {
            default: "Additional Settings",
            enUS: "Additional Settings",
            deDE: "Zusätzliche Einstellungen",
        },
        sectionCallLabel: {
            default: "Call Settings",
            enUS: "Call Settings",
            deDE: "Anruf-Einstellungen",
        },
        sectionGeneralLabel: {
            default: "General Settings",
            enUS: "General Settings",
            deDE: "Allgemeine Einstellungen",
        },
    },
    multipleChoicePrompt: {
        inputChoicesDescription: {
            default: "Add and adopt words and their synonyms to your need.",
            enUS: "Add and adopt words and their synonyms to your need.",
            deDE: "Fügen Sie Wörter und ihre Synonyme nach Bedarf hinzu und übernehmen Sie diese.",
        },
        inputChoicesLabel: {
            default: "Choices",
            enUS: "Choices",
            deDE: "Auswahlmöglichkeiten",
        },
        nodeLabel: {
            default: "Get Multiple Choice Answer from Caller",
            enUS: "Get Multiple Choice Answer from Caller",
            deDE: "Multiple-Choice-Antwort von dem:der Anrufer:in erhalten",
        },
        nodeSummary: {
            default: "Say something to the call with a multiple choice prompt",
            enUS: "Say something to the call with a multiple choice prompt",
            deDE: "Dem:Der Anrufer:in etwas mit einer Multiple-Choice-Aufforderung sagen",
        },
        sectionChoicesSectionLabel: {
            default: "Choices",
            enUS: "Choices",
            deDE: "Auswahlmöglichkeiten",
        },
    },
    outboundService: {
        nodeLabel: {
            default: "Check Outbound Result",
            enUS: "Check Outbound Result",
        },
        nodeSummary: {
            default: "Check the Result of the Outbound Call",
            enUS: "Check the Result of the Outbound Call",
        },
    },
    play: {
        inputBargeInDescription: {
            default: "To let the speaker interrupt the audio file, activate this checkbox.",
            enUS: "To let the speaker interrupt the audio file, activate this checkbox.",
            deDE: "Um den:die Sprechend:e die Audiodatei unterbrechen zu lassen, aktivieren Sie diese Checkbox.",
        },
        inputUrlLabel: {
            default: "Audio URL",
            enUS: "Audio URL",
            deDE: "Audio-URL",
        },
        inputUrlLabelDescription: {
            default: "Enter the location of the audio file. \nAllowed formats: Linear PCM with signed 16 bits (8 kHz or 16 kHz), A-law or µ-law 8 kHz.",
            enUS: "Enter the location of the audio file. \nAllowed formats: Linear PCM with signed 16 bits (8 kHz or 16 kHz), A-law or µ-law 8 kHz.",
            deDE: "Geben Sie den Speicherort für die Audiodatei ein. Erlaubte Formate: Linear-PCM mit vorzeichenbehafteten 16 Bit (8 kHz oder 16 kHz), A-law oder µ-law 8 kHz.",
        },
        nodeLabel: {
            default: "Play Audio File",
            enUS: "Play Audio File",
            deDE: "Audiodatei abspielen",
        },
        nodeSummary: {
            default: "Play an audio file to the call",
            enUS: "Play an audio file to the call",
            deDE: "Audiodatei für den Anruf abspielen",
        },
    },
    promptForNumber: {
        inputMaxDigitsDescription: {
            default: "Enter the maximum number of digits the phone number can have. If this option is enabled, the input ends as soon as the maximum number is reached.",
            enUS: "Enter the maximum number of digits the phone number can have. If this option is enabled, the input ends as soon as the maximum number is reached.",
            deDE: "Geben Sie ein, wie viele Ziffern die Rufnummer maximal haben darf. Wenn diese Option aktiviert ist, endet die Eingabe, sobald die maximale Anzahl erreicht ist.",
        },
        nodeLabel: {
            default: "Get Phone Number from Caller",
            enUS: "Get Phone Number from Caller",
            deDE: "Anrufer:in nach Rufnummer fragen",
        },
        nodeSummary: {
            default: "Say something to the caller with a prompt to enter a number",
            enUS: "Say something to the caller with a prompt to enter a number",
        },
    },
    recordingStart: {
        inputMaxDurationDescription: {
            default: "Select the maximum call recording duration in seconds, after which the call recording will be stopped automatically.",
            enUS: "Select the maximum call recording duration in seconds, after which the call recording will be stopped automatically.",
            deDE: "Wählen Sie die maximale Dauer der Gesprächsaufzeichnung in Sekunden, nach der die Gesprächsaufzeichnung automatisch beendet werden soll.",
        },
        inputMaxDurationLabel: {
            default: "Maximum Call Recording Duration (s)",
            enUS: "Maximum Call Recording Duration (s)",
            deDE: "Maximale Dauer der Gesprächsaufzeichnung",
        },
        inputSpeakersLabel: {
            default: "Speakers to record",
            enUS: "Speakers to record",
            deDE: "Aufzuzeichnende Sprecher:innen",
        },
        nodeLabel: {
            default: "Start Call Recording",
            enUS: "Start Call Recording",
            deDE: "Gesprächsaufzeichnung starten",
        },
        nodeSummary: {
            default: "Start or resume recording of a call",
            enUS: "Start or resume recording of a call",
            deDE: "Aufzeichnung eines Anrufs starten oder fortsetzen",
        },
    },
    recordingStop: {
        inputTerminateDescription: {
            default: "To stop the call recording rather than to pause, activate this checkbox.",
            enUS: "To stop the call recording rather than to pause, activate this checkbox.",
            deDE: "Um die Gesprächsaufzeichnung zu beenden und nicht zu unterbrechen, aktivieren Sie diese Checkbox.",
        },
        inputTerminateLabel: {
            default: "Stop Call Recording",
            enUS: "Stop Call Recording",
            deDE: "Gesprächsaufzeichnung stoppen",
        },
        nodeLabel: {
            default: "Stop Call Recording",
            enUS: "Stop Call Recording",
            deDE: "Gesprächsaufzeichnung stoppen",
        },
        nodeSummary: {
            default: "Pause or stop recording of a call",
            enUS: "Pause or stop recording of a call",
            deDE: "Gesprächsaufzeichnung anhalten oder beenden",
        },
    },
    sendData: {
        inputDataDescription: {
            default: "Enter an object with arbitrary properties. Each property must have a string value.",
            enUS: "Enter an object with arbitrary properties. Each property must have a string value.",
            deDE: "Geben Sie ein Objekt mit beliebigen Eigenschaften ein. Jede Eigenschaft muss einen String-Wert haben.",
        },
        nodeLabel: {
            default: "Send Data",
            enUS: "Send Data",
            deDE: "Daten senden",
        },
        nodeSummary: {
            default: "Attach custom data to a dialog",
            enUS: "Attach custom data to a dialog",
            deDE: "Benutzerdefinierte Daten an einen Dialog anhängen",
        },
    },
    shared: {
        inputAcceptAnsweringMachinesDescription: {
            default: "The bot accepts answering machines picking up the calls.",
            enUS: "The bot accepts answering machines picking up the calls.",
            deDE: "Der Bot akzeptiert Anrufbeantworter, die die Anrufe entgegennehmen.",
        },
        inputAcceptAnsweringMachinesLabel: {
            default: "Accept Answering Machines",
            enUS: "Accept Answering Machines",
            deDE: "Anrufbeantworter akzeptieren",
        },
        inputBargeInDescription: {
            default: "To let the speaker interrupt the audio file, activate this checkbox.",
            enUS: "To let the speaker interrupt the audio file, activate this checkbox.",
            deDE: "Um den:die Sprechend:e die Audiodatei unterbrechen zu lassen, aktivieren Sie diese Checkbox.",
        },
        inputBargeInLabel: {
            default: "Barge In",
            enUS: "Barge In",
            deDE: "Unterbrechen",
        },
        inputCallerIdDescription: {
            default: "Enter the phone number that should be displayed to the callee. (This is a best-effort option. A correct display can not be guaranteed.)",
            enUS: "Enter the phone number that should be displayed to the callee. (This is a best-effort option. A correct display can not be guaranteed.)",
            deDE: "Geben Sie die Rufnummer ein, die dem:der Angerufenen angezeigt werden soll. (Dies ist eine Best-Effort-Option. Eine korrekte Anzeige kann nicht garantiert werden.)",
        },
        inputCallerIdLabel: {
            default: "Displayed Caller ID",
            enUS: "Displayed Caller ID",
            deDE: "Angezeigte Anrufer-ID",
        },
        inputCustomSipHeadersDescription: {
            default: "Enter an object where each property is the name of a header, and the value is a list of strings. All header names must begin with X-.",
            enUS: "Enter an object where each property is the name of a header, and the value is a list of strings. All header names must begin with X-.",
            deDE: "Geben Sie ein Objekt ein, bei dem jede Eigenschaft der Name eines Headers ist und der Wert eine Liste von Strings ist. Alle Header-Namen müssen mit X- beginnen.",
        },
        inputCustomSipHeadersLabel: {
            default: "Custom SIP Headers",
            enUS: "Custom SIP Headers",
            deDE: "Benutzerdefinierte SIP-Header",
        },
        inputDataDescription: {
            default: "Enter an object with key-value pairs that should be attached as custom data to the dialog.",
            enUS: "Enter an object with key-value pairs that should be attached as custom data to the dialog.",
            deDE: "Geben Sie ein Objekt mit Schlüssel-Wert-Paaren ein, das als benutzerdefinierte Daten an den Dialog angehängt werden sollen.",
        },
        inputDataLabel: {
            default: "Custom Data",
            enUS: "Custom Data",
            deDE: "Benutzerdefinierte Daten",
        },
        inputEndFlowDescription: {
            default: "To stop the flow after executing this node, activate this checkbox.",
            enUS: "To stop the flow after executing this node, activate this checkbox.",
            deDE: "Um den Flow nach der Ausführung dieses Knotens zu stoppen, aktivieren Sie diese Checkbox.",
        },
        inputEndFlowLabel: {
            default: "Quit Flow",
            enUS: "Quit Flow",
            deDE: "Flow beenden",
        },
        inputExperimentalEnableRingingToneDescription: {
            default: "To play a ringing tone during a pending call, activate this checkbox. This setting will change in the future.",
            enUS: "To play a ringing tone during a pending call, activate this checkbox. This setting will change in the future.",
            deDE: "Um während eines Anrufes, der sich im Rufaufbau befindet, ein Kingelton abzuspielen, aktivieren Sie diese Checkbox. Diese Einstellung wird sich in Zukunft ändern.",
        },
        inputExperimentalEnableRingingToneLabel: {
            default: "(EXPERIMENTAL) Enable Ringing Tone",
            enUS: "(EXPERIMENTAL) Enable Ringing Tone",
            deDE: "(EXPERIMENTAL) Klingelton aktivieren",
        },
        inputInterpretAsDescription: {
            default: "Specify whether the text should be interpreted as text or SSML markup.",
            enUS: "Specify whether the text should be interpreted as text or SSML markup.",
            deDE: "Legen Sie fest, ob der Text als Text oder SSML-Auszeichnung interpretiert werden soll.",
        },
        inputInterpretAsLabel: {
            default: "Interpret as",
            enUS: "Interpret as",
            deDE: "Interpretieren als",
        },
        inputLanguageDescription: {
            default: "To overwrite the Text-to-Speech language for specific messages, enter the language you want.",
            enUS: "To overwrite the Text-to-Speech language for specific messages, enter the language you want.",
            deDE: "Um die Text-to-Speech-Sprache für bestimmte Nachrichten zu überschreiben, geben Sie die gewünschte Sprache ein.",
        },
        inputLanguageLabel: {
            default: "Language",
            enUS: "Language",
            deDE: "Sprache",
        },
        inputMaxDigitsLabel: {
            default: "Maximum Allowed Digits",
            enUS: "Maximum Allowed Digits",
            deDE: "Maximal erlaubte Ziffernanzahl",
        },
        inputRecordingIdDescription: {
            default: "Enter an arbitrary string to identify the call recording if multiple call recordings are created in the same dialog.",
            enUS: "Enter an arbitrary string to identify the call recording if multiple call recordings are created in the same dialog.",
            deDE: "Geben Sie einen beliebigen String zur Identifizierung der Gesprächsaufzeichnung ein, wenn mehrere Gesprächsaufzeichnungen im selben Dialog erstellt werden.",
        },
        inputRecordingIdLabel: {
            default: "Call Recording ID",
            enUS: "Call Recording ID",
            deDE: "Gesprächsaufzeichnungs-ID",
        },
        inputRingTimeoutDescription: {
            default: "Enter the maximum time in seconds that the call should ring before the call attempt is canceled.",
            enUS: "Enter the maximum time in seconds that the call should ring before the call attempt is canceled.",
            deDE: "Geben Sie die maximale Zeit in Sekunden ein, die der Anruf läuten soll, bevor der Anrufversuch abgebrochen wird.",
        },
        inputRingTimeoutLabel: {
            default: "Ring Timeout (s)",
            enUS: "Ring Timeout (s)",
            deDE: "Zeitüberschreitung beim Klingeln (s)",
        },
        inputSubmitInputsDescription: {
            default: "Select one or more characters with which the caller should confirm the phone number input. Allowed are digits from 0-9 and the special characters * and #. You can enter only one character per line.",
            enUS: "Select one or more characters with which the caller should confirm the phone number input. Allowed are digits from 0-9 and the special characters * and #. You can enter only one character per line.",
            deDE: "Wählen Sie ein oder mehrere Zeichen, mit dem der:die Anrufer:in die Rufnummerneingabe bestätigen soll. Erlaubt sind Ziffern von 0-9 und die Sonderzeichen * und #. Pro Zeile können Sie nur ein Zeichen eingeben.",
        },
        inputSubmitInputsLabel: {
            default: "Submit Inputs",
            enUS: "Submit Inputs",
            deDE: "Eingaben übermitteln",
        },
        inputSynthesizersDescription: {
            default: "If specified, this parameter overwrites the Text-to-Speech list from the project settings.",
            enUS: "If specified, this parameter overwrites the Text-to-Speech list from the project settings.",
            deDE: "Sofern angegeben, überschreibt dieser Parameter die Text-to-Speech-Liste aus den Projekteinstellungen.",
        },
        inputSynthesizersLabel: {
            default: "Text-to-Speech Profiles",
            enUS: "Text-to-Speech Profiles",
            deDE: "Text-to-Speech-Profile",
        },
        inputTextDescription: {
            default: "Enter the message to introduce the prompt to the caller.",
            enUS: "Enter the message to introduce the prompt to the caller.",
            deDE: "Geben Sie die Nachricht ein, mit der dem:der Anrufer:in die Eingabeaufforderung vorgestellt werden soll.",
        },
        inputTextLabel: {
            default: "Message",
            enUS: "Message",
            deDE: "Nachricht",
        },
        inputTimeoutDescription: {
            default: "Enter the duration in seconds after which the prompt should be cancelled.",
            enUS: "Enter the duration in seconds after which the prompt should be cancelled.",
            deDE: "Geben Sie die Dauer in Sekunden an, nach der die Eingabeaufforderung abgebrochen werden soll.",
        },
        inputTimeoutLabel: {
            default: "Timeout",
            enUS: "Timeout",
            deDE: "Zeitüberschreitung",
        },
        inputUseMaxDigitsDescription: {
            default: "To use the \"Maximum Digits\" property as a stop condition, activate this checkbox.",
            enUS: "To use the \"Maximum Digits\" property as a stop condition, activate this checkbox.",
            deDE: "Um die Eigenschaft „Maximale Ziffernanzahl“ als Stoppbedingung zu verwenden, aktivieren Sie diese Checkbox.",
        },
        inputUseMaxDigitsLabel: {
            default: "Use Maximum Digits",
            enUS: "Use Maximum Digits",
            deDE: "Maximale Ziffernanzahl verwenden",
        },
        inputUseSubmitInputsDescription: {
            default: "To use the \"Submit Inputs\" property as a stop condition, activate this checkbox.",
            enUS: "To use the \"Submit Inputs\" property as a stop condition, activate this checkbox.",
            deDE: "Um die Eigenschaft „Eingaben übermitteln“ als Stoppbedingung zu verwenden, aktivieren Sie diese Checkbox.",
        },
        inputUseSubmitInputsLabel: {
            default: "Use Submit Inputs",
            enUS: "Use Submit Inputs",
            deDE: "Eingaben übermitteln verwenden",
        },
        inputWhisperingTextDescription: {
            default: "Enter the text that should be announced to the agent the call is transfered to before the call parties are connected.",
            enUS: "Enter the text that should be announced to the agent the call is transfered to before the call parties are connected.",
            deDE: "Geben Sie den Text ein, der dem:der Agent:in bei der Weiterleitung angesagt werden soll, bevor die Gesprächsteilnehmer:innen verbunden werden.",
        },
        inputWhisperingTextLabel: {
            default: "Whispering Announcement",
            enUS: "Whispering Announcement",
            deDE: "Whispering-Ansage",
        },
        sectionStopConditionLabel: {
            default: "Stop Condition",
            enUS: "Stop Condition",
            deDE: "Stopbedingung",
        },
    },
    speak: {
        inputAdditionalTextLabel: {
            default: "Additional Text",
            enUS: "Additional Text",
            deDE: "Zusätzlicher Text",
        },
        inputTextLabel: {
            default: "Text",
            enUS: "Text",
            deDE: "Text",
        },
        nodeLabel: {
            default: "Speak (with SSML formatting)",
            enUS: "Speak (with SSML formatting)",
            deDE: "Sprechen (mit SSML-Formatierung)",
        },
        nodeSummary: {
            default: "Speak something out to the caller with SSML support",
            enUS: "Speak something out to the caller with SSML support",
            deDE: "Dem:Der Anrufer:in mit SSML-Unterstützung etwas vorsprechen",
        },
        sectionTextOptionsLabel: {
            default: "Additional Text Section",
            enUS: "Additional Text Section",
            deDE: "Zusätzlicher Textabschnitt",
        },
    },
    speechToText: {
        inputLanguageLabel: {
            default: "Language",
            enUS: "Language",
            deDE: "Sprache",
        },
        inputProfileTokenDescription: {
            default: "Please use the profile token as displayed in VIER CVG, Speech Service Profiles",
            enUS: "Please use the profile token as displayed in VIER CVG, Speech Service Profiles",
        },
        inputProfileTokenFallbackDescription: {
            default: "Profile Token Fallback",
            enUS: "Profile Token Fallback",
        },
        inputProfileTokenFallbackLabel: {
            default: "Profile Token Fallback",
            enUS: "Profile Token Fallback",
        },
        inputProfileTokenLabel: {
            default: "Profile Token",
            enUS: "Profile Token",
            deDE: "Profil-Token",
        },
        inputServiceFallbackLabel: {
            default: "Speech-to-Text Fallback",
            enUS: "Speech-to-Text Fallback",
        },
        inputServiceLabel: {
            default: "Speech-to-Text Service",
            enUS: "Speech-to-Text Service",
            deDE: "Speech-to-Text-Dienst",
        },
        inputTranscriberDescription: {
            default: "Type in one of the follow Speech-to-Text Services: 'GOOGLE', 'IBM', 'MICROSOFT' or leave empty to set a service via profile token",
            enUS: "Type in one of the follow Speech-to-Text Services: 'GOOGLE', 'IBM', 'MICROSOFT' or leave empty to set a service via profile token",
        },
        nodeLabel: {
            default: "Set Speech-to-Text Service",
            enUS: "Set Speech-to-Text Service",
        },
        nodeSummary: {
            default: "Speech-to-Text services need to be used to transcribe the expected input in the the best possible way",
            enUS: "Speech-to-Text services need to be used to transcribe the expected input in the the best possible way",
        },
        sectionFallback: {
            default: "Fallback Option",
            enUS: "Fallback Option",
        },
        sectionSelectLanguageLabel: {
            default: "Select Language",
            enUS: "Select Language",
            deDE: "Sprache wählen",
        },
        sectionSelectSTTLabel: {
            default: "Select Speech-to-Text Services",
            enUS: "Select Speech-to-Text Services",
        },
    },
    terminate: {
        nodeLabel: {
            default: "End Call",
            enUS: "End Call",
            deDE: "Anruf beenden",
        },
        nodeSummary: {
            default: "Cancel the call",
            enUS: "Cancel the call",
            deDE: "Anruf abbrechen",
        },
    },
    timer: {
        inputTimeoutStartDescription: {
            default: "The Inactivity Timeout can only be set, if not already in the CVG project settings duration",
            enUS: "The Inactivity Timeout can only be set, if not already in the CVG project settings duration",
        },
        inputTimeoutStopDescription: {
            default: "Stops the Inactivity Timeout detection",
            enUS: "Stops the Inactivity Timeout detection",
        },
        nodeLabel: {
            default: "Inactivity Timeout",
            enUS: "Inactivity Timeout",
        },
        nodeSummary: {
            default: "Sets the Inactivity Timeout in (s)",
            enUS: "Sets the Inactivity Timeout in (s)",
        },
        useStartInputsLabel: {
            default: "Activate Inactivity Timeout (s) ",
            enUS: "Activate Inactivity Timeout (s) ",
        },
        useStopInputsLabel: {
            default: "Deactivate Inactivity Timeout (s) ",
            enUS: "Deactivate Inactivity Timeout (s) ",
        },
    },
};