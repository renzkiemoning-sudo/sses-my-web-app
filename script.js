
const roleCatalog = [
  { value: 'admin', label: 'ADMIN', display: 'Administrator' },
  { value: 'user', label: 'USER', display: 'Citizen' },
  { value: 'pnp', label: 'PNP', display: 'PNP' },
  { value: 'hospital', label: 'HOSPITAL', display: 'Hospital' },
  { value: 'bfp', label: 'BFP', display: 'BFP' },
  { value: 'mdrrmc', label: 'MDRRMC', display: 'MDRRMC' },
  { value: 'zaneco', label: 'ZANECO', display: 'ZANECO' }
];

const departmentConfig = {
  pnp: {
    label: 'PNP Operations Center',
    short: 'PNP',
    accent: '#0f766e',
    message: 'Patrol response and police coordination dashboard.'
  },
  hospital: {
    label: 'Hospital Response Unit',
    short: 'Hospital',
    accent: '#b91c1c',
    message: 'Medical triage and ambulance readiness dashboard.'
  },
  bfp: {
    label: 'Bureau of Fire Protection',
    short: 'BFP',
    accent: '#d97706',
    message: 'Fire suppression and hazard monitoring dashboard.'
  },
  mdrrmc: {
    label: 'MDRRMC Coordination Hub',
    short: 'MDRRMC',
    accent: '#4338ca',
    message: 'Disaster response and emergency coordination dashboard.'
  },
  zaneco: {
    label: 'ZANECO Utility Response',
    short: 'ZANECO',
    accent: '#0f766e',
    message: 'Powerline and utility disruption monitoring dashboard.'
  }
};

const departmentRoles = Object.keys(departmentConfig);

const defaultAdminUser = {
  name: 'SSES',
  email: 'sses@sindangan.gov',
  password: '@sindmunicipality-2026',
  role: 'admin'
};

const defaultAgencyUsers = [
  { name: 'User Portal', email: 'user@sindangan.gov', password: 'user@2026', role: 'user' },
  { name: 'PNP Sindangan', email: 'pnp@sindangan.gov', password: 'pnp@2026', role: 'pnp' },
  { name: 'Sindangan Hospital', email: 'hospital@sindangan.gov', password: 'hospital@2026', role: 'hospital' },
  { name: 'BFP Sindangan', email: 'bfp@sindangan.gov', password: 'bfp@2026', role: 'bfp' },
  { name: 'MDRRMC Sindangan', email: 'mdrrmc@sindangan.gov', password: 'mdrrmc@2026', role: 'mdrrmc' },
  { name: 'ZANECO', email: 'zaneco@sindangan.gov', password: 'zaneco@2026', role: 'zaneco' }
];

const defaultAgencyUserProfiles = [
  { name: 'User Portal', email: 'user@sindangan.gov', role: 'User', status: 'Inactive' },
  { name: 'PNP Sindangan', email: 'pnp@sindangan.gov', role: 'PNP', status: 'Inactive' },
  { name: 'Sindangan Hospital', email: 'hospital@sindangan.gov', role: 'Hospital', status: 'Inactive' },
  { name: 'BFP Sindangan', email: 'bfp@sindangan.gov', role: 'BFP', status: 'Inactive' },
  { name: 'MDRRMC Sindangan', email: 'mdrrmc@sindangan.gov', role: 'MDRRMC', status: 'Inactive' },
  { name: 'ZANECO', email: 'zaneco@sindangan.gov', role: 'ZANECO', status: 'Inactive' }
];

const state = {
  mode: 'user',
  currentSection: 'dashboard',
  userProfile: {
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    role: 'user'
  },
  loginBackgroundImage: '',
  logoImage: '',
  reports: [],
  alerts: [
    { id: 1, type: 'Weather alert', message: 'Heavy rainfall expected tonight.', severity: 'High', time: 'Just now' },
    { id: 2, type: 'Road closure', message: 'Main highway closed due to landslide.', severity: 'Medium', time: '2 hrs ago' }
  ],
  contacts: [
    { name: 'Sindangan Police', phone: '+63 88 555 1234', department: 'Police', email: 'police@sindangan.gov', facebook: 'facebook.com/SindanganPolice' },
    { name: 'Sindangan Fire Dept', phone: '+63 88 555 5678', department: 'Fire Department', email: 'firedept@sindangan.gov', facebook: 'facebook.com/SindanganFireDept' },
    { name: 'Sindangan Hospital', phone: '+63 88 555 9012', department: 'Hospital/Ambulance', email: 'hospital@sindangan.gov', facebook: 'facebook.com/SindanganHospital' },
    { name: 'MDRRMC', phone: '+63 88 555 3456', department: 'MDRRMC', email: 'mdrrmc@sindangan.gov', facebook: 'facebook.com/SindanganMDRRMC' },
    { name: 'ZANECO', phone: '+63 88 555 2345', department: 'Electric Utility', email: 'info@zaneco.com', facebook: 'facebook.com/ZANECO' },
    ],
  evacCenters: [
    { name: 'Sindangan Cultural Center', capacity: '200/250', status: 'Available', address: 'Poblacion, Sindangan' },
    { name: 'Sindangan Gymnasium', capacity: '120/180', status: 'Limited', address: 'Brgy. San Roque' },
    { name: 'Brgy. Goleo, SNAIS School', capacity: '70/100', status: 'Available', address: 'Brgy. GOLEO' }
  ],
  safetyTips: [
    { title: 'Flood Preparedness', text: 'Keep emergency kits ready, move valuables to higher ground, and avoid flooded roads.' },
    { title: 'Fire Safety', text: 'Install smoke alarms, keep fire extinguishers accessible, and avoid overloading outlets.' },
    { title: 'Earthquake Procedures', text: 'Drop, cover, and hold on. Stay away from windows and heavy objects.' },
    { title: 'First Aid Guides', text: 'Clean wounds, keep pressure on bleeding areas, and seek medical care quickly.' }
  ],
  notificationFeed: [
    { title: 'Report update', text: 'Your Flood report is now being responded to.' },
    { title: 'Broadcast', text: 'Heavy storms expected tomorrow morning.' },
    { title: 'System announcement', text: 'Maintenance scheduled at 11 PM tonight.' }
  ],
  readNotifications: [],
  userReadNotifications: {},
  pnpReviewedAlerts: [],
  hospitalReviewedAlerts: [],
  responders: [
    { name: 'Police Task Force', type: 'Police', location: 'Sindangan Police Station', status: 'Available' },
    { name: 'Fire Strike Team', type: 'Fire', location: 'Sindangan Fire Station', status: 'Available' },
    { name: 'Medical Unit', type: 'Medical', location: 'Sindangan General Hospital', status: 'Available' },
    { name: 'MDRRMC Sindangan', type: 'Disaster Response', location: 'MDRRMC Office, Sindangan', status: 'Available' },
    { name: 'ZANECO Service Team', type: 'Utilities', location: 'Sindangan Electric Utility Office', status: 'Available' }
  ],
  users: [
    { name: 'SSES', email: 'sses@sindangan.gov', role: 'Admin', status: 'Inactive' },
    ...defaultAgencyUserProfiles
  ],
  contentItems: [
    { title: 'Community Preparedness', text: 'Review evacuation routes and keep important documents safe.' },
    { title: 'Emergency Briefing', text: 'Join the next public safety briefing this Friday at 2 PM.' }
  ],
  auditLogs: [
    { description: 'Admin updated alert message.', time: '5 min ago' },
    { description: 'User submitted a Flood report.', time: '20 min ago' },
    { description: 'Response team assigned to incident #1.', time: '40 min ago' }
  ],
  authUsers: [defaultAdminUser, ...defaultAgencyUsers],
  authenticated: false
};

// Local persistence helpers
function saveToLocalStorage() {
  try {
    const toSave = {
      authUsers: state.authUsers,
      reports: state.reports,
      alerts: state.alerts,
      notificationFeed: state.notificationFeed,
      readNotifications: state.readNotifications,
      userReadNotifications: state.userReadNotifications,
      pnpReviewedAlerts: state.pnpReviewedAlerts,
      hospitalReviewedAlerts: state.hospitalReviewedAlerts,
      users: state.users,
      contacts: state.contacts,
      evacCenters: state.evacCenters,
      responders: state.responders,
      contentItems: state.contentItems,
      loginBackgroundImage: state.loginBackgroundImage,
      logoImage: state.logoImage
    };
    localStorage.setItem('sindangan_state', JSON.stringify(toSave));
    try {
      localStorage.setItem('sindangan_state_lastUpdate', String(Date.now()));
    } catch (e) {
      // ignore failures writing auxiliary key
    }
    return true;
  } catch (e) {
    console.warn('Failed to save to localStorage', e);
    return false;
  }
}

const colorThemeStorageKeyPrefix = 'sindangan_color_theme_';

function getColorThemeStorageKey(role = getActiveRole()) {
  return `${colorThemeStorageKeyPrefix}${role}`;
}

function getColorTheme(role = getActiveRole()) {
  try {
    return localStorage.getItem(getColorThemeStorageKey(role)) === 'dark' ? 'dark' : 'light';
  } catch (error) {
    console.warn('Could not load the color theme preference.', error);
    return 'light';
  }
}

function setColorTheme(theme, persist = false) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  const button = document.querySelector('.theme-toggle');
  if (button) {
    button.textContent = isDark ? '☀️' : '🌙';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    button.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
  }

  if (persist) {
    try {
      localStorage.setItem(getColorThemeStorageKey(), isDark ? 'dark' : 'light');
    } catch (error) {
      console.warn('Could not save the color theme preference.', error);
    }
  }
}

function initializeColorTheme() {
  setColorTheme(getColorTheme());

  const button = document.querySelector('.theme-toggle');
  if (button) {
    button.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      setColorTheme(nextTheme, true);
    });
  }
}

function removeRequestedBarangayResponder(responders) {
  return responders.filter(responder =>
    String(responder.name || '').trim().toLowerCase() !== 'barangay response team' ||
    String(responder.type || '').trim().toLowerCase() !== 'barangay' ||
    String(responder.location || '').trim().toLowerCase() !== 'local barangay hall'
  );
}

function syncSharedStateFromStorage(event) {
  if (!event || event.key !== 'sindangan_state' || !event.newValue) return;

  try {
    const parsed = JSON.parse(event.newValue);
    if (parsed.authUsers) state.authUsers = parsed.authUsers;
    if (parsed.reports) state.reports = parsed.reports;
    if (parsed.alerts) state.alerts = parsed.alerts;
    if (Array.isArray(parsed.notificationFeed)) state.notificationFeed = parsed.notificationFeed;
    if (Array.isArray(parsed.readNotifications)) state.readNotifications = parsed.readNotifications;
    if (parsed.userReadNotifications && typeof parsed.userReadNotifications === 'object') state.userReadNotifications = parsed.userReadNotifications;
    if (Array.isArray(parsed.pnpReviewedAlerts)) state.pnpReviewedAlerts = parsed.pnpReviewedAlerts;
    if (Array.isArray(parsed.hospitalReviewedAlerts)) state.hospitalReviewedAlerts = parsed.hospitalReviewedAlerts;
    if (parsed.users) state.users = parsed.users;
    if (parsed.contacts) state.contacts = parsed.contacts;
    if (parsed.evacCenters) state.evacCenters = parsed.evacCenters;
    if (Array.isArray(parsed.responders)) {
      state.responders = removeRequestedBarangayResponder(parsed.responders);
      if (state.responders.length !== parsed.responders.length) saveToLocalStorage();
    }
    if (parsed.contentItems) state.contentItems = parsed.contentItems;
    if (parsed.loginBackgroundImage !== undefined) state.loginBackgroundImage = parsed.loginBackgroundImage;
    if (parsed.logoImage !== undefined) state.logoImage = parsed.logoImage;

    if (state.authenticated && !state.userProfile.email && state.userProfile.name) {
      state.userProfile.email = state.userProfile.email || '';
    }

    renderDashboard();
    renderSectionData();
  } catch (e) {
    console.warn('Failed to sync state from storage', e);
  }
}

window.addEventListener('storage', syncSharedStateFromStorage);

function getRoleDisplayName(role) {
  const match = roleCatalog.find(item => item.value === role);
  return match ? match.display : String(role || 'User').replace(/\b\w/g, char => char.toUpperCase());
}

function getDepartmentLandingInfo(role) {
  return departmentConfig[role] || null;
}

function isAdminRole(role) {
  return role === 'admin';
}

function isDepartmentRole(role) {
  return !!departmentConfig[role];
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem('sindangan_state');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.authUsers) state.authUsers = parsed.authUsers;
      if (parsed.reports) state.reports = parsed.reports;
      if (parsed.alerts) state.alerts = parsed.alerts;
      if (Array.isArray(parsed.notificationFeed)) state.notificationFeed = parsed.notificationFeed;
      if (Array.isArray(parsed.readNotifications)) state.readNotifications = parsed.readNotifications;
      if (parsed.userReadNotifications && typeof parsed.userReadNotifications === 'object') state.userReadNotifications = parsed.userReadNotifications;
      if (Array.isArray(parsed.pnpReviewedAlerts)) state.pnpReviewedAlerts = parsed.pnpReviewedAlerts;
      if (Array.isArray(parsed.hospitalReviewedAlerts)) state.hospitalReviewedAlerts = parsed.hospitalReviewedAlerts;
      if (parsed.users) state.users = parsed.users;
      if (parsed.contacts) state.contacts = parsed.contacts;
      if (parsed.evacCenters) state.evacCenters = parsed.evacCenters;
      if (Array.isArray(parsed.responders)) {
        state.responders = removeRequestedBarangayResponder(parsed.responders);
        if (state.responders.length !== parsed.responders.length) saveToLocalStorage();
      }
      if (parsed.contentItems) state.contentItems = parsed.contentItems;
      if (parsed.loginBackgroundImage) state.loginBackgroundImage = parsed.loginBackgroundImage;
      if (parsed.logoImage) state.logoImage = parsed.logoImage;
    }
  } catch (e) {
    console.warn('Failed to load from localStorage', e);
  }
}

// Sync/Observer System for Real-Time Updates
const syncSystem = {
  subscribers: [],
  subscribe(callback) {
    this.subscribers.push(callback);
  },
  notify(changeType, data) {
    this.subscribers.forEach(callback => callback(changeType, data));
    // Show sync notification
    showSyncNotification(changeType, data);
  }
};

// Show visual notification when data syncs
function showSyncNotification(changeType, data) {
  const role = getActiveRole();
  const isAgency = isAdminRole(role) || isDepartmentRole(role);
  const isRecipient = isAgency
    ? Array.isArray(data && data.audience) && data.audience.includes(role)
    : String(data && data.recipientEmail || '').trim().toLowerCase() === String(state.userProfile.email || '').trim().toLowerCase();
  if (changeType !== 'notification_added' || !isRecipient) return;

  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-size: 14px;
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
    font-weight: 500;
  `;
  
  const display = getNotificationDisplay(data, role);
  const message = `✓ ${display.title || 'Incident response updated'}`;

  if (window.speechSynthesis && (display.title || display.text || message)) {
    const spokenText = display.text ? `${display.title || 'Incident update'}: ${display.text}` : message;
    speakNotification(spokenText);
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Sync handlers for real-time dashboard updates
function syncReportChange() {
  renderDashboard();
  renderReports();
  renderIncidentManagement();
  renderAgencyOperations();
  if (elements.myReportsList) renderReports();
}

function syncAlertChange() {
  renderDashboard();
  renderAlerts();
  renderAdminAlerts();
}

function syncUserChange() {
  renderUserManagement();
}

function syncNotificationChange() {
  renderNotifications();
}

// Subscribe to changes
syncSystem.subscribe((changeType, data) => {
  if (changeType === 'report_submitted') {
    syncReportChange();
  } else if (changeType === 'alert_created') {
    syncAlertChange();
  } else if (changeType === 'user_registered') {
    syncUserChange();
  } else if (changeType === 'incident_updated') {
    syncReportChange();
  } else if (changeType === 'notification_added') {
    syncNotificationChange();
  }
});
 
 

const userMenu = [
  { id: 'dashboard', label: '🏠 Dashboard' },
  { id: 'reportEmergency', label: '🚨 Report Emergency' },
  { id: 'myReports', label: '📋 My Reports' },
  { id: 'emergencyAlerts', label: '🔔 Emergency Alerts' },
  { id: 'evacuationCenters', label: '🏢 Evacuation Centers' },
  { id: 'emergencyContacts', label: '📞 Emergency Contacts' },
  { id: 'safetyTips', label: '📖 Safety Tips' },
  { id: 'notifications', label: '🔔 Notifications' },
  { id: 'profile', label: '👤 Profile' }
];

const adminMenu = [
  { id: 'dashboard', label: '🏠 Dashboard' },
  { id: 'incidentManagement', label: '🚨 Incident Management' },
  { id: 'adminAlerts', label: '📢 Emergency Alerts' },
  { id: 'responderManagement', label: '👮 Responder Management' },
  { id: 'userManagement', label: '👥 User Management' },
  { id: 'evacuationManagement', label: '🏢 Evacuation Centers' },
  { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
  { id: 'contactManagement', label: '📞 Emergency Contacts' },
  { id: 'contentManagement', label: '📰 Content Management' },
  { id: 'systemSettings', label: '⚙️ System Settings' },
  { id: 'auditLogs', label: '📝 Audit Logs' }
];

const departmentMenus = {
  pnp: [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'incomingCitizenReports', label: '📨 Incoming Citizen Reports' },
    { id: 'patrolDispatch', label: '🚓 Patrol Dispatch' },
    { id: 'policeTeamA', label: '👮 Police Team A' },
    { id: 'emergencyAlerts', label: '📡 Alert Coordination' },
    { id: 'emergencyContacts', label: '📞 Contact Directory' },
    { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
    { id: 'notifications', label: '🔔 Notifications' }
  ],
  hospital: [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'incomingCitizenReports', label: '📨 Incoming Citizen Reports' },
    { id: 'medicalTriage', label: '🩺 Medical Triage' },
    { id: 'ambulanceReadiness', label: '🚑 Ambulance Readiness' },
    { id: 'emergencyAlerts', label: '⚕️ Alert Coordination' },
    { id: 'emergencyContacts', label: '📞 Hospital Contacts' },
    { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
    { id: 'notifications', label: '🔔 Updates' }
  ],
  bfp: [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'incomingCitizenReports', label: '📨 Incoming Citizen Reports' },
    { id: 'fireOperations', label: '🚒 Fire Operations' },
    { id: 'fireReadiness', label: '🚒 Crew Readiness' },
    { id: 'emergencyAlerts', label: '🔥 Incident Alerts' },
    { id: 'evacuationCenters', label: '🏢 Evacuation Zones' },
    { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
    { id: 'notifications', label: '🔔 Dispatch Feed' }
  ],
  mdrrmc: [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'incomingCitizenReports', label: '📨 Incoming Citizen Reports' },
    { id: 'disasterOps', label: '🌊 Disaster Ops' },
    { id: 'disasterResponse', label: '🚨 Disaster Response' },
    { id: 'evacuationCenters', label: '🏠 Shelter Status' },
    { id: 'emergencyAlerts', label: '⚠️ Warning Board' },
    { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
    { id: 'notifications', label: '🔔 Response Log' }
  ],
  zaneco: [
    { id: 'dashboard', label: '🏠 Dashboard' },
    { id: 'incomingCitizenReports', label: '📨 Incoming Citizen Reports' },
    { id: 'utilityGrid', label: '⚡ Utility Grid' },
    { id: 'utilityCrewReadiness', label: '🔧 ZANECO Service Crew' },
    { id: 'emergencyAlerts', label: '📉 Power Alerts' },
    { id: 'emergencyContacts', label: '📞 Utility Contacts' },
    { id: 'reportsAnalytics', label: '📊 Reports & Analytics' },
    { id: 'notifications', label: '🔔 Service Feed' }
  ]
};

const elements = {
  sidebarMenu: document.getElementById('sidebarMenu'),
  userModeBtn: document.getElementById('userModeBtn'),
  adminModeBtn: document.getElementById('adminModeBtn'),
  pageTitle: document.getElementById('pageTitle'),
  pageSubtitle: document.getElementById('pageSubtitle'),
  currentRole: document.getElementById('currentRole'),
  logoutBtn: document.getElementById('logoutBtn'),
  loginScreen: document.getElementById('loginScreen'),
  loginForm: document.getElementById('loginForm'),
  loginScreen: document.getElementById('loginScreen'),
  loginPanel: document.querySelector('.login-panel'),
  loginRole: document.getElementById('loginRole'),
  loginEmail: document.getElementById('loginEmail'),
  loginPassword: document.getElementById('loginPassword'),
  loginMessage: document.getElementById('loginMessage'),
  showLoginBtn: document.getElementById('showLoginBtn'),
  showRegisterBtn: document.getElementById('showRegisterBtn'),
  registerForm: document.getElementById('registerForm'),
  loginBgInput: document.getElementById('loginBgInput'),
  uploadLoginBgBtn: document.getElementById('uploadLoginBgBtn'),
  resetLoginBgBtn: document.getElementById('resetLoginBgBtn'),
  logoInput: document.getElementById('logoInput'),
  uploadLogoBtn: document.getElementById('uploadLogoBtn'),
  resetLogoBtn: document.getElementById('resetLogoBtn'),
  brandLogoImg: document.getElementById('brandLogoImg'),
  brandLogoImgSidebar: document.getElementById('brandLogoImgSidebar'),
  registerName: document.getElementById('registerName'),
  registerEmail: document.getElementById('registerEmail'),
  registerPhone: document.getElementById('registerPhone'),
  registerPassword: document.getElementById('registerPassword'),
  registerConfirmPassword: document.getElementById('registerConfirmPassword'),
  registerMessage: document.getElementById('registerMessage'),
  appShell: document.querySelector('.app-shell'),
  reportForm: document.getElementById('reportForm'),
  incidentType: document.getElementById('incidentType'),
  incidentLocation: document.getElementById('incidentLocation'),
  incidentTitle: document.getElementById('incidentTitle'),
  incidentDescription: document.getElementById('incidentDescription'),
  myReportsList: document.getElementById('myReportsList'),
  recentReports: document.getElementById('recentReports'),
  safetyAnnouncements: document.getElementById('safetyAnnouncements'),
  alertsList: document.getElementById('alertsList'),
  contactsList: document.getElementById('contactsList'),
  evacuationList: document.getElementById('evacuationList'),
  safetyTipsList: document.getElementById('safetyTipsList'),
  notificationFeed: document.getElementById('notificationFeed'),
  profileForm: document.getElementById('profileForm'),
  profileName: document.getElementById('profileInputName'),
  profileEmail: document.getElementById('profileEmail'),
  profilePhone: document.getElementById('profilePhone'),
  profileEmergencyContact: document.getElementById('profileEmergencyContact'),
  profilePassword: document.getElementById('profilePassword'),
  incidentTable: document.getElementById('incidentTable'),
  alertForm: document.getElementById('alertForm'),
  alertType: document.getElementById('alertType'),
  alertMessage: document.getElementById('alertMessage'),
  alertSeverity: document.getElementById('alertSeverity'),
  adminAlertsList: document.getElementById('adminAlertsList'),
  responderList: document.getElementById('responderList'),
  downloadPdfBtn: document.getElementById('downloadPdfBtn'),
  downloadExcelBtn: document.getElementById('downloadExcelBtn'),
  userManagementList: document.getElementById('userManagementList'),
  evacManagementList: document.getElementById('evacManagementList'),
  contactManagementList: document.getElementById('contactManagementList'),
  contentForm: document.getElementById('contentForm'),
  contentTitle: document.getElementById('contentTitle'),
  contentText: document.getElementById('contentText'),
  contentManagementList: document.getElementById('contentManagementList'),
  auditLogList: document.getElementById('auditLogList'),
  alertCount: document.getElementById('alertCount'),
  reportCount: document.getElementById('reportCount'),
  resolvedCount: document.getElementById('resolvedCount'),
  activeCount: document.getElementById('activeCount'),
  analyticsIncidents: document.getElementById('analyticsIncidents'),
  analyticsResponse: document.getElementById('analyticsResponse'),
  analyticsMonthly: document.getElementById('analyticsMonthly'),
  incidentModal: document.getElementById('incidentModal'),
  modalReportId: document.getElementById('modalReportId'),
  modalSubmittedBy: document.getElementById('modalSubmittedBy'),
  modalSubmitterEmail: document.getElementById('modalSubmitterEmail'),
  modalIncidentType: document.getElementById('modalIncidentType'),
  modalIncidentPriority: document.getElementById('modalIncidentPriority'),
  modalIncidentTitle2: document.getElementById('modalIncidentTitle2'),
  modalIncidentLocation: document.getElementById('modalIncidentLocation'),
  modalIncidentDescription: document.getElementById('modalIncidentDescription'),
  modalIncidentContact: document.getElementById('modalIncidentContact'),
  modalIncidentAttachments: document.getElementById('modalIncidentAttachments'),
  modalIncidentTime: document.getElementById('modalIncidentTime'),
  modalStatusSelect: document.getElementById('modalStatusSelect'),
  modalResponseNotes: document.getElementById('modalResponseNotes'),
  closeModalBtn: document.getElementById('closeModalBtn'),
  closeModalBtn2: document.getElementById('closeModalBtn2'),
  updateIncidentBtn: document.getElementById('updateIncidentBtn')
};

function getDepartmentRoleMenu(role) {
  const menu = departmentMenus[role] || [];
  return menu.map(item => ({ ...item }));
}

function getCurrentRoleMenu() {
  const role = state.userProfile && state.userProfile.role ? state.userProfile.role : state.mode;
  if (role === 'admin') return adminMenu;
  if (isDepartmentRole(role)) return getDepartmentRoleMenu(role);
  return userMenu;
}

function getActiveRole() {
  return (state.userProfile && state.userProfile.role) || state.mode || 'user';
}

const reportNotificationRoles = ['admin', 'pnp', 'hospital', 'bfp', 'mdrrmc', 'zaneco'];

function getVisibleNotifications(role = getActiveRole()) {
  if (isAdminRole(role) || isDepartmentRole(role)) {
    return state.notificationFeed.filter(note => Array.isArray(note.audience) && note.audience.includes(role));
  }

  const email = String(state.userProfile.email || '').trim().toLowerCase();
  return state.notificationFeed.filter(note => email && String(note.recipientEmail || '').trim().toLowerCase() === email);
}

function addReportNotification(report, eventType, title, text, citizenTitle, citizenText) {
  const id = `report-${report.id}-${eventType}`;
  const existing = state.notificationFeed.find(note => String(note.id) === id);
  if (existing) return existing;

  const notification = {
    id,
    eventType,
    reportId: report.id,
    audience: [...reportNotificationRoles],
    recipientEmail: report.submitterEmail || '',
    title,
    text,
    citizenTitle,
    citizenText,
    createdAt: new Date().toISOString()
  };
  state.notificationFeed.unshift(notification);
  return notification;
}

function recordIncidentActionNotification(report, action) {
  const notification = addReportNotification(
    report,
    `action-${Date.now()}`,
    'Incident response updated',
    `${report.title || report.type || 'Incident'}: ${action}`,
    'Your report was updated',
    `Your ${report.type || 'incident'} report was updated: ${action}`
  );
  if (!saveToLocalStorage()) {
    state.notificationFeed = state.notificationFeed.filter(note => note.id !== notification.id);
    return false;
  }
  syncSystem.notify('notification_added', notification);
  return true;
}

function getVisibleReportsForRole(role = getActiveRole()) {
  if (!state.authenticated) {
    return state.reports;
  }

  if (isAdminRole(role) || isDepartmentRole(role)) {
    return state.reports;
  }

  const email = state.userProfile.email || '';
  const name = state.userProfile.name || '';

  return state.reports.filter(report => {
    const matchEmail = email && report.submitterEmail && report.submitterEmail === email;
    const matchName = name && report.submittedBy && report.submittedBy === name;
    return matchEmail || matchName;
  });
}

function renderSidebar() {
  elements.sidebarMenu.innerHTML = '';
  const role = state.userProfile && state.userProfile.role ? state.userProfile.role : state.mode;
  const menu = role === 'admin' ? adminMenu : isDepartmentRole(role) ? getDepartmentRoleMenu(role) : userMenu;
  const roleDisplay = getRoleDisplayName(role);

  const roleHeader = document.createElement('div');
  roleHeader.className = 'sidebar-role-header';

  const roleLabel = document.createElement('span');
  roleLabel.className = 'sidebar-role-label';
  roleLabel.textContent = 'CURRENT MODE';

  const roleBadge = document.createElement('div');
  roleBadge.className = 'sidebar-role-badge';
  roleBadge.textContent = roleDisplay;

  roleHeader.appendChild(roleLabel);
  roleHeader.appendChild(roleBadge);

  const sectionLabel = document.createElement('div');
  sectionLabel.className = 'sidebar-section-label';
  sectionLabel.textContent = role === 'admin'
    ? 'Admin Navigation'
    : isDepartmentRole(role)
      ? 'Department Menu'
      : 'Citizen Navigation';

  elements.sidebarMenu.appendChild(roleHeader);
  elements.sidebarMenu.appendChild(sectionLabel);

  menu.forEach(item => {
    const button = document.createElement('button');
    button.className = 'nav-link';
    button.textContent = item.label;
    button.dataset.section = item.id;
    if (item.id === state.currentSection) button.classList.add('active');
    button.addEventListener('click', () => {
      state.currentSection = item.id;
      showSection(item.id);
    });
    elements.sidebarMenu.appendChild(button);
  });
}

function getAllowedSectionRoles(role) {
  if (role === 'admin') return new Set(['admin', 'user']);
  if (role === 'user') return new Set(['user']);
  if (isDepartmentRole(role)) return new Set(['user', role]);
  return new Set(['user']);
}

function canAccessSectionForRole(sectionElement, role) {
  if (!sectionElement) return false;
  const allowedRoles = getAllowedSectionRoles(role);
  const sectionRoles = (sectionElement.dataset.role || '').split(/\s+/).filter(Boolean);
  return sectionRoles.some(sectionRole => allowedRoles.has(sectionRole));
}

function showSection(sectionId) {
  const role = state.userProfile && state.userProfile.role ? state.userProfile.role : state.mode || 'user';
  const sections = Array.from(document.querySelectorAll('.section-panel'));
  const validSection = sections.find(section => section.id === sectionId && canAccessSectionForRole(section, role)) || sections.find(section => canAccessSectionForRole(section, role));
  const nextSectionId = validSection ? validSection.id : 'dashboard';

  sections.forEach(section => {
    section.classList.toggle('active', section.id === nextSectionId);
  });
  [...elements.sidebarMenu.children].forEach(link => {
    const isLinkActive = link.dataset.section === nextSectionId;
    link.classList.toggle('active', isLinkActive);
  });

  state.currentSection = nextSectionId;
  saveActiveSession();
  elements.pageTitle.textContent = getSectionTitle(nextSectionId);
  elements.pageSubtitle.textContent = getSectionSubtitle(nextSectionId);
  renderDashboard();
  renderSectionData();
}

function getSectionTitle(sectionId) {
  const mapping = {
    dashboard: 'Dashboard',
    incomingCitizenReports: 'Incoming Citizen Reports',
    reportEmergency: 'Report an Emergency',
    myReports: 'My Reports',
    emergencyAlerts: 'Emergency Alerts',
    emergencyContacts: 'Contact Directory',
    evacuationCenters: 'Evacuation Centers',
    safetyTips: 'Safety Tips',
    notifications: 'Notifications',
    profile: 'Profile',
    incidentManagement: 'Incident Management',
    adminAlerts: 'Emergency Alerts Management',
    responderManagement: 'Responder Management',
    userManagement: 'User Management',
    evacuationManagement: 'Evacuation Center Management',
    reportsAnalytics: 'Reports & Analytics',
    contactManagement: 'Emergency Contacts Management',
    contentManagement: 'Content Management',
    systemSettings: 'System Settings',
    auditLogs: 'Audit Logs',
    patrolDispatch: 'Patrol Dispatch',
    policeTeamA: 'Police Team A',
    medicalTriage: 'Medical Triage',
    ambulanceReadiness: 'Ambulance Readiness',
    fireOperations: 'Fire Operations',
    fireReadiness: 'Crew Readiness',
    disasterOps: 'Disaster Operations',
    disasterResponse: 'Disaster Response',
    utilityGrid: 'Utility Grid',
    utilityCrewReadiness: 'ZANECO Service Crew'
  };
  if (state.userProfile.role === 'pnp' && sectionId === 'emergencyAlerts') return 'Alert Coordination';
  if (state.userProfile.role === 'hospital' && sectionId === 'emergencyAlerts') return 'Alert Coordination';
  if (state.userProfile.role === 'pnp' && sectionId === 'notifications') return 'Dispatch Notifications';
  return mapping[sectionId] || 'Sindangan Sentinel';
}

function getSectionSubtitle(sectionId) {
  const mapping = {
    dashboard: 'Overview of emergency status and alerts.',
    incomingCitizenReports: 'Review citizen submissions and their original photos.',
    reportEmergency: 'Send incident information to responders.',
    myReports: 'Track your active and past incident reports.',
    emergencyAlerts: 'Current warnings and broadcast messages.',
    emergencyContacts: 'Agency contact details for emergency coordination.',
    evacuationCenters: 'Safe zones and shelter capacity status.',
    safetyTips: 'Preparedness, prevention, and first aid guidance.',
    notifications: 'Updates for your reports and community alerts.',
    profile: 'Manage your personal information securely.',
    incidentManagement: 'Monitor and update emergency incidents.',
    adminAlerts: 'Create and schedule alerts for citizens.',
    responderManagement: 'Assign teams and update their locations.',
    userManagement: 'Review and manage registered users.',
    evacuationManagement: 'Maintain center occupancy and availability.',
    reportsAnalytics: 'View response metrics and incident trends.',
    contactManagement: 'Maintain critical agency contact information.',
    contentManagement: 'Update safety tips and public announcements.',
    systemSettings: 'Configure roles, backups, and logs.',
    auditLogs: 'Review user activity and administrative changes.',
    patrolDispatch: 'Live patrol monitoring and dispatch coordination.',
    policeTeamA: 'Update PNP patrol team availability for the police response network.',
    medicalTriage: 'Medical readiness, response allocation, and urgent cases.',
    ambulanceReadiness: 'Update medical unit availability for the hospital response network.',
    fireOperations: 'Fire response readiness and hazard monitoring.',
    fireReadiness: 'Update fire crew and apparatus availability.',
    disasterOps: 'Disaster response, shelter status, and hazard tracking.',
    disasterResponse: 'Update MDRRMC team availability for disaster response.',
    utilityGrid: 'Service continuity and electrical outage coordination.',
    utilityCrewReadiness: 'Update ZANECO service crew availability for the utility response network.'
  };
  if (state.userProfile.role === 'pnp' && sectionId === 'emergencyAlerts') return 'Review active warnings and record PNP acknowledgment.';
  if (state.userProfile.role === 'hospital' && sectionId === 'emergencyAlerts') return 'Coordinate public warnings and record hospital response acknowledgment.';
  if (state.userProfile.role === 'pnp' && sectionId === 'notifications') return 'Track incident updates, broadcasts, and system activity.';
  return mapping[sectionId] || '';
}

function escapeReportText(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

async function optimizeReportPhoto(file) {
  const image = await createImageBitmap(file);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const scaleToFit = Math.min(1, 1280 / Math.max(image.width, image.height));
  let scale = scaleToFit;
  let quality = 0.78;
  let blob = null;

  for (let attempt = 0; attempt < 8; attempt += 1) {
    canvas.width = Math.max(1, Math.round(image.width * scale));
    canvas.height = Math.max(1, Math.round(image.height * scale));
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', quality));
    if (blob && blob.size <= 400 * 1024) break;
    scale *= 0.82;
    quality = Math.max(0.5, quality - 0.05);
  }

  image.close();
  if (!blob || blob.size > 400 * 1024) {
    throw new Error(`${file.name} could not be compressed enough to share.`);
  }

  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Could not read ${file.name}.`));
    reader.readAsDataURL(blob);
  });

  return { name: file.name, type: 'image/jpeg', dataUrl };
}

let reportImageDatabasePromise;

function openReportImageDatabase() {
  if (!window.indexedDB) return Promise.reject(new Error('This browser cannot store original photos.'));
  if (reportImageDatabasePromise) return reportImageDatabasePromise;

  reportImageDatabasePromise = new Promise((resolve, reject) => {
    const request = window.indexedDB.open('sindangan-report-images', 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains('reportImages')) {
        database.createObjectStore('reportImages', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      const database = request.result;
      database.onversionchange = () => {
        database.close();
        reportImageDatabasePromise = null;
      };
      resolve(database);
    };
    request.onerror = () => {
      reportImageDatabasePromise = null;
      reject(new Error('Could not open photo storage.'));
    };
  });

  return reportImageDatabasePromise;
}

async function saveOriginalReportImages(reportId, files) {
  if (!files.length) return [];
  const database = await openReportImageDatabase();
  const records = files.map((file, index) => ({
    id: `${reportId}:${index}`,
    reportId,
    name: file.name,
    type: file.type,
    blob: file.slice(0, file.size, file.type)
  }));
  const transaction = database.transaction('reportImages', 'readwrite');
  const store = transaction.objectStore('reportImages');

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve(records.map(record => record.id));
    transaction.onerror = () => reject(new Error('Could not save the original photos.'));
    transaction.onabort = () => reject(new Error('Could not save the original photos.'));
    records.forEach(record => store.put(record));
  });
}

async function getOriginalReportImage(imageId) {
  if (!imageId) return null;
  const database = await openReportImageDatabase();
  const transaction = database.transaction('reportImages', 'readonly');
  const request = transaction.objectStore('reportImages').get(imageId);

  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result ? request.result.blob : null);
    request.onerror = () => reject(new Error('Could not load the original photo.'));
  });
}

async function deleteOriginalReportImages(imageIds) {
  if (!imageIds.length) return;
  const database = await openReportImageDatabase();
  const transaction = database.transaction('reportImages', 'readwrite');
  const store = transaction.objectStore('reportImages');
  return new Promise((resolve, reject) => {
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(new Error('Could not remove unused original photos.'));
    imageIds.forEach(imageId => store.delete(imageId));
  });
}

function getOriginalReportImageIds(reports) {
  return Array.from(new Set(reports.flatMap(report =>
    Array.isArray(report.attachments)
      ? report.attachments.map(attachment => attachment.originalImageId).filter(Boolean)
      : []
  )));
}

function releaseReportPhotoUrls(root) {
  root.querySelectorAll('[data-original-object-url]').forEach(image => {
    URL.revokeObjectURL(image.dataset.originalObjectUrl);
    delete image.dataset.originalObjectUrl;
  });
}

async function showOriginalReportImage(image) {
  if (!image.dataset.originalImageId) return;
  const blob = await getOriginalReportImage(image.dataset.originalImageId);
  if (!blob || !blob.type.startsWith('image/') || !image.isConnected) return;
  const objectUrl = URL.createObjectURL(blob);
  image.dataset.originalObjectUrl = objectUrl;
  image.src = objectUrl;
}

function renderDepartmentReportFeed(target) {
  if (!target) return;
  releaseReportPhotoUrls(target);
  const agency = getDepartmentLandingInfo(state.userProfile.role);
  const reportTypes = [...new Set(state.reports.map(report => String(report.type || '').trim()).filter(Boolean))].sort();
  const openReports = state.reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved').length;
  target.innerHTML = `
    <section class="card department-report-feed">
      <header class="department-report-header">
        <div class="department-report-heading">
          <span class="department-report-eyebrow">${escapeReportText(agency ? agency.short : 'DEPARTMENT')} / RESPONSE QUEUE</span>
          <h2>Incoming citizen reports</h2>
          <p>Review citizen reports routed to your response desk and open each submission for details.</p>
        </div>
        <div class="department-report-summary">
          <span><strong>${state.reports.length}</strong> total reports</span>
          <span><strong>${openReports}</strong> open cases</span>
        </div>
      </header>
      <div class="department-report-toolbar">
        <label class="department-report-search">
          <span class="visually-hidden">Search reports</span>
          <input type="search" class="department-report-search-input" placeholder="Search title, location, reporter..." />
        </label>
        <label>
          <span class="visually-hidden">Filter by status</span>
          <select class="department-report-status-filter">
            <option value="">All statuses</option>
            <option value="pending">Pending</option>
            <option value="responding">Responding</option>
            <option value="resolved">Resolved</option>
          </select>
        </label>
        <label>
          <span class="visually-hidden">Filter by incident type</span>
          <select class="department-report-type-filter">
            <option value="">All incident types</option>
            ${reportTypes.map(type => `<option value="${escapeReportText(type)}">${escapeReportText(type)}</option>`).join('')}
          </select>
        </label>
        <span class="department-report-visible-count" aria-live="polite">${state.reports.length} reports</span>
      </div>
      <div class="department-report-list">
        ${state.reports.map(report => {
          const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase())
            ? String(report.status).toLowerCase()
            : 'pending';
          const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase())
            ? String(report.priority).toLowerCase()
            : 'unspecified';
          const attachmentNames = Array.isArray(report.attachmentNames) ? report.attachmentNames : [];
          const reportPhotos = [
            ...(Array.isArray(report.attachments) ? report.attachments : []),
            ...(report.media ? [report.media] : [])
          ];
          const photos = reportPhotos.filter(photo =>
            /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(photo.dataUrl || '')
          );
          return `
            <article class="department-report-row" data-report-id="${escapeReportText(report.id)}" data-status="${status}" data-type="${escapeReportText(report.type || '')}">
              <div class="department-report-title-row">
                <div class="department-report-title-copy">
                  <div class="department-report-tags">
                    <span class="department-report-type">${escapeReportText(report.type || 'Emergency')}</span>
                    <span class="department-report-priority priority-${priority}">${escapeReportText(report.priority || 'Priority unassigned')}</span>
                  </div>
                  <h3>${escapeReportText(report.title || report.type || 'Emergency report')}</h3>
                  <p class="department-report-location">${escapeReportText(report.location || 'Location not provided')}</p>
                </div>
                <span class="status-pill status-${status}">${escapeReportText(report.status || 'Pending')}</span>
              </div>
              <div class="department-report-facts">
                <span><strong>Reporter:</strong> ${escapeReportText(report.submittedBy || 'Unknown')}</span>
                <span><strong>Contact:</strong> ${escapeReportText(report.contactNumber || 'Not provided')}</span>
                <span><strong>Submitted:</strong> ${escapeReportText(report.submitted || 'Unknown')}</span>
              </div>
              <p class="department-report-description">${escapeReportText(report.description || 'No description provided')}</p>
              ${photos.length ? `<div class="department-report-photos">${photos.map(photo => `<img src="${escapeReportText(photo.dataUrl)}" alt="Report photo: ${escapeReportText(photo.name)}" data-original-image-id="${escapeReportText(photo.originalImageId || '')}" loading="lazy">`).join('')}</div>` : ''}
              ${attachmentNames.length ? `<p class="department-report-attachments"><strong>Attachments:</strong> ${attachmentNames.map(escapeReportText).join(', ')}</p>` : ''}
              <footer class="department-report-footer">
                <span>${escapeReportText(report.submitted || 'Unknown')}</span>
                <button type="button" class="secondary-btn department-report-details" data-report-id="${escapeReportText(report.id)}">View report details</button>
              </footer>
            </article>
          `;
        }).join('')}
      </div>
      <p class="department-report-empty${state.reports.length ? ' hidden' : ''}">No citizen reports have been submitted.</p>
      <p class="department-report-no-matches hidden">No reports match these filters.</p>
    </section>
  `;

  const searchInput = target.querySelector('.department-report-search-input');
  const statusFilter = target.querySelector('.department-report-status-filter');
  const typeFilter = target.querySelector('.department-report-type-filter');
  const visibleCount = target.querySelector('.department-report-visible-count');
  const noMatches = target.querySelector('.department-report-no-matches');
  const applyFilters = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleReports = 0;
    target.querySelectorAll('.department-report-row').forEach(row => {
      const matchesQuery = !query || row.textContent.toLowerCase().includes(query);
      const matchesStatus = !statusFilter.value || row.dataset.status === statusFilter.value;
      const matchesType = !typeFilter.value || row.dataset.type === typeFilter.value;
      const isVisible = matchesQuery && matchesStatus && matchesType;
      row.classList.toggle('is-filtered-out', !isVisible);
      if (isVisible) visibleReports += 1;
    });
    visibleCount.textContent = `${visibleReports} ${visibleReports === 1 ? 'report' : 'reports'}`;
    noMatches.classList.toggle('hidden', visibleReports > 0 || state.reports.length === 0);
  };

  searchInput.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  typeFilter.addEventListener('change', applyFilters);
  target.querySelectorAll('.department-report-details').forEach(button => {
    button.addEventListener('click', () => openIncidentModal(button.dataset.reportId));
  });
  target.querySelectorAll('img[data-original-image-id]').forEach(image => {
    showOriginalReportImage(image).catch(error => console.warn(error.message));
  });
}

function renderDepartmentLanding() {
  const panel = document.getElementById('departmentLanding');
  if (!panel) return;

  const role = state.userProfile.role || state.mode || 'user';
  const info = getDepartmentLandingInfo(role);
  const activeReports = state.reports.filter(report => report.status !== 'Resolved').length;
  const resolvedReports = state.reports.filter(report => report.status === 'Resolved').length;
  const highPriorityAlerts = state.alerts.filter(alert => alert.severity === 'High').length;
  const latestReport = state.reports[0];
  const latestReportStatus = ['pending', 'responding', 'resolved'].includes(String(latestReport && latestReport.status || '').toLowerCase())
    ? String(latestReport.status).toLowerCase()
    : 'pending';

  if (!info || !departmentRoles.includes(role)) {
    panel.classList.add('hidden');
    panel.innerHTML = '';
    return;
  }

  panel.classList.remove('hidden');
  releaseReportPhotoUrls(panel);
  panel.innerHTML = `
    <div class="agency-banner agency-banner-pnp" style="--agency-accent:${info.accent};">
      <div>
        <span class="agency-tag">${escapeReportText(info.short)} / OPERATIONS</span>
        <h3>${info.label}</h3>
        <p>${info.message}</p>
        <div class="agency-quick-actions">
          <button type="button" data-dashboard-section="incomingCitizenReports">Incoming citizen reports <span aria-hidden="true">&#8594;</span></button>
          <button type="button" data-dashboard-section="emergencyAlerts">Review alert feed <span aria-hidden="true">&#8594;</span></button>
        </div>
      </div>
      <div class="agency-status-box">
        <span class="status-dot"></span>
        <span><strong>Operations online</strong><small>Shared citizen feed</small></span>
      </div>
    </div>
    <div class="agency-grid agency-grid-pnp">
      <article class="card agency-stat agency-stat-total">
        <h4>Citizen reports</h4>
        <strong>${state.reports.length}</strong>
        <small>All submitted reports</small>
      </article>
      <article class="card agency-stat agency-stat-open">
        <h4>Open cases</h4>
        <strong>${activeReports}</strong>
        <small>Awaiting resolution</small>
      </article>
      <article class="card agency-stat agency-stat-priority">
        <h4>High-priority alerts</h4>
        <strong>${highPriorityAlerts}</strong>
        <small>Current high-severity broadcasts</small>
      </article>
      <article class="card agency-stat agency-stat-resolved">
        <h4>Resolved reports</h4>
        <strong>${resolvedReports}</strong>
        <small>Closed citizen cases</small>
      </article>
    </div>
    <div class="agency-feed agency-feed-pnp">
      <article class="card agency-panel agency-latest-panel">
        <div class="agency-panel-heading">
          <div><span class="agency-panel-kicker">REPORT QUEUE</span><h3>Latest citizen report</h3></div>
          <span class="agency-panel-count">${activeReports} open</span>
        </div>
        <div class="list-box">
          <div class="list-item agency-latest-item">
            <h4>${latestReport ? escapeReportText(latestReport.title || latestReport.type || 'Emergency report') : 'No citizen reports yet'}</h4>
            <small>${latestReport ? `${escapeReportText(latestReport.type || 'Emergency')} • ${escapeReportText(latestReport.location || 'Location not provided')}` : 'New reports will appear here.'}</small>
            <span class="status-pill status-${latestReportStatus}">${latestReport ? escapeReportText(latestReport.status || 'Pending') : 'Waiting'}</span>
          </div>
        </div>
      </article>
      <article class="card agency-panel agency-alert-panel">
        <div class="agency-panel-heading">
          <div><span class="agency-panel-kicker">PUBLIC SAFETY</span><h3>Priority alerts</h3></div>
          <span class="agency-panel-count">${highPriorityAlerts} high</span>
        </div>
        <ul class="info-list agency-alert-list">
          ${state.alerts.slice(0, 3).map(alert => `
            <li class="info-item agency-alert-item">
              <div class="agency-alert-heading">
                <h4>${escapeReportText(alert.type || 'Emergency alert')}</h4>
                <span class="agency-alert-severity severity-${String(alert.severity || 'normal').toLowerCase()}">${escapeReportText(alert.severity || 'Normal')}</span>
              </div>
              <small>${escapeReportText(alert.message || '')}</small>
            </li>
          `).join('') || '<li class="info-item"><h4>No active alerts</h4><small>System is stable.</small></li>'}
        </ul>
      </article>
    </div>
  `;
  panel.querySelectorAll('[data-dashboard-section]').forEach(button => {
    button.addEventListener('click', () => showSection(button.dataset.dashboardSection));
  });
}

function renderAdminDashboardOverview() {
  const overview = document.getElementById('adminDashboardOverview');
  if (!overview) return;

  const isAdmin = state.userProfile.role === 'admin';
  overview.classList.toggle('hidden', !isAdmin);
  if (!isAdmin) {
    overview.innerHTML = '';
    return;
  }

  const openReports = state.reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const awaitingAssignment = openReports.filter(report => !report.assignedUnit).length;
  const highAlerts = state.alerts.filter(alert => String(alert.severity || '').toLowerCase() === 'high').length;
  const availableResponders = state.responders.filter(responder => responder.status === 'Available').length;

  overview.innerHTML = `
    <header class="admin-dashboard-header">
      <div>
        <span>ADMINISTRATOR / OPERATIONS</span>
        <h2>Municipal response overview</h2>
        <p>Live incidents, alert pressure, and response capacity.</p>
      </div>
      <div class="admin-dashboard-actions">
        <button type="button" data-admin-section="incidentManagement">Review incidents</button>
        <button type="button" data-admin-section="adminAlerts">Create alert</button>
      </div>
    </header>
    <div class="admin-dashboard-metrics">
      <article><span>Open incidents</span><strong>${openReports.length}</strong><small>Not yet resolved</small></article>
      <article class="metric-attention"><span>Awaiting assignment</span><strong>${awaitingAssignment}</strong><small>Open reports without a unit</small></article>
      <article class="metric-danger"><span>High alerts</span><strong>${highAlerts}</strong><small>Current high-severity alerts</small></article>
      <article class="metric-ready"><span>Available responders</span><strong>${availableResponders}</strong><small>Units marked available</small></article>
    </div>
    <div class="admin-dashboard-lower">
      <section class="admin-dashboard-recent">
        <div class="admin-dashboard-subhead"><div><span>INCIDENT QUEUE</span><h3>Recent reports</h3></div><button type="button" data-admin-section="incidentManagement">View all</button></div>
        ${state.reports.slice(0, 4).map(report => `
          <div class="admin-dashboard-report">
            <div><strong>${escapeReportText(report.title || report.type || 'Emergency report')}</strong><small>${escapeReportText(report.type || 'Emergency')} · ${escapeReportText(report.location || 'Location not provided')}</small></div>
            <span class="status-pill status-${String(report.status || 'Pending').toLowerCase()}">${escapeReportText(report.status || 'Pending')}</span>
          </div>
        `).join('') || '<p class="admin-dashboard-empty">No reports have been submitted.</p>'}
      </section>
      <section class="admin-dashboard-shortcuts">
        <div class="admin-dashboard-subhead"><div><span>CONTROL ROOM</span><h3>Management</h3></div></div>
        <button type="button" data-admin-section="responderManagement"><span>Responder readiness</span><strong>${availableResponders} available <b>→</b></strong></button>
        <button type="button" data-admin-section="evacuationManagement"><span>Evacuation network</span><strong>${state.evacCenters.length} centers <b>→</b></strong></button>
        <button type="button" data-admin-section="auditLogs"><span>Recent activity</span><strong>${state.auditLogs.length} audit entries <b>→</b></strong></button>
      </section>
    </div>
  `;

  overview.querySelectorAll('[data-admin-section]').forEach(button => {
    button.addEventListener('click', () => showSection(button.dataset.adminSection));
  });
}

function renderCitizenDashboard(reports) {
  const overview = document.getElementById('citizenDashboardOverview');
  if (!overview) return;

  const isCitizen = state.authenticated && state.userProfile.role === 'user';
  overview.classList.toggle('hidden', !isCitizen);
  if (!isCitizen) {
    overview.innerHTML = '';
    return;
  }

  const openReports = reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const resolvedReports = reports.length - openReports.length;
  const highAlerts = state.alerts.filter(alert => String(alert.severity || '').toLowerCase() === 'high').length;

  overview.innerHTML = `
    <section class="citizen-dashboard">
      <header class="citizen-dashboard-header">
        <div>
          <span class="citizen-dashboard-eyebrow">SINDANGAN / CITIZEN PORTAL</span>
          <h2>Your safety dashboard</h2>
          <p>Track your emergency reports and stay up to date with community alerts.</p>
        </div>
        <div class="citizen-dashboard-actions">
          <button type="button" data-citizen-section="reportEmergency">Report an emergency</button>
          <button type="button" data-citizen-section="myReports">View my reports</button>
        </div>
      </header>
      <div class="citizen-dashboard-summary" aria-label="Your emergency report summary">
        <article><span>Your reports</span><strong>${reports.length}</strong><small>Submitted from your account</small></article>
        <article class="is-open"><span>Open cases</span><strong>${openReports.length}</strong><small>Awaiting resolution</small></article>
        <article class="is-resolved"><span>Resolved</span><strong>${resolvedReports}</strong><small>Cases closed</small></article>
        <article class="is-alert"><span>Active alerts</span><strong>${state.alerts.length}</strong><small>${highAlerts} high priority</small></article>
      </div>
      <div class="citizen-dashboard-panels">
        <section class="citizen-dashboard-panel citizen-dashboard-reports">
          <div class="citizen-dashboard-panel-heading">
            <div><span>YOUR ACTIVITY</span><h3>Recent reports</h3></div>
            <button type="button" data-citizen-section="myReports">View all</button>
          </div>
          ${reports.slice(0, 4).map(report => {
            const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase())
              ? String(report.status).toLowerCase()
              : 'pending';
            return `<button type="button" class="citizen-dashboard-report" data-report-id="${escapeReportText(report.id)}">
              <span class="citizen-dashboard-report-main"><strong>${escapeReportText(report.title || report.type || 'Emergency report')}</strong><small>${escapeReportText(report.type || 'Emergency')} · ${escapeReportText(report.location || 'Location not provided')}</small></span>
              <span class="status-pill status-${status}">${escapeReportText(report.status || 'Pending')}</span>
            </button>`;
          }).join('') || '<p class="citizen-dashboard-empty">You have not submitted a report yet. Use “Report an emergency” to get started.</p>'}
        </section>
        <section class="citizen-dashboard-panel citizen-dashboard-alerts">
          <div class="citizen-dashboard-panel-heading">
            <div><span>COMMUNITY SAFETY</span><h3>Latest alerts</h3></div>
            <button type="button" data-citizen-section="emergencyAlerts">View alerts</button>
          </div>
          ${state.alerts.slice(0, 3).map(alert => {
            const severity = String(alert.severity || 'low').toLowerCase();
            const severityClass = ['high', 'medium', 'low'].includes(severity) ? severity : 'low';
            return `<article class="citizen-dashboard-alert">
              <div><strong>${escapeReportText(alert.type || 'Emergency alert')}</strong><span class="citizen-dashboard-severity severity-${severityClass}">${escapeReportText(alert.severity || 'Low')}</span></div>
              <p>${escapeReportText(alert.message || 'No additional details provided.')}</p>
              <small>${escapeReportText(alert.time || 'Recently posted')}</small>
            </article>`;
          }).join('') || '<p class="citizen-dashboard-empty">There are no active community alerts.</p>'}
        </section>
      </div>
    </section>
  `;

  overview.querySelectorAll('[data-citizen-section]').forEach(button => {
    button.addEventListener('click', () => showSection(button.dataset.citizenSection));
  });
  overview.querySelectorAll('.citizen-dashboard-report').forEach(button => {
    button.addEventListener('click', () => openIncidentModal(button.dataset.reportId));
  });
}

function renderDashboard() {
  const dashboardPanel = document.getElementById('dashboard');
  const role = state.userProfile.role || state.mode || 'user';
  const isCitizen = state.authenticated && role === 'user';
  if (dashboardPanel) dashboardPanel.classList.toggle('department-dashboard', departmentRoles.includes(role));
  if (dashboardPanel) dashboardPanel.classList.toggle('admin-dashboard-mode', role === 'admin');
  if (dashboardPanel) dashboardPanel.classList.toggle('citizen-dashboard-mode', isCitizen);

  const visibleReports = state.authenticated ? getVisibleReportsForRole(role) : [];
  const activeReports = visibleReports.filter(report => String(report.status || '').toLowerCase() !== 'resolved').length;
  const resolvedReports = visibleReports.length - activeReports;

  elements.alertCount.textContent = `${state.alerts.length} active alerts`;
  elements.reportCount.textContent = `${visibleReports.length} reports`;
  elements.resolvedCount.textContent = `${resolvedReports} resolved`;
  elements.activeCount.textContent = `${activeReports} active`;

  const reportPageTotal = document.getElementById('reportPageTotal');
  const reportPageActive = document.getElementById('reportPageActive');
  const reportPageAlerts = document.getElementById('reportPageAlerts');
  if (reportPageTotal) reportPageTotal.textContent = visibleReports.length;
  if (reportPageActive) reportPageActive.textContent = visibleReports.filter(report => report.status !== 'Resolved').length;
  if (reportPageAlerts) reportPageAlerts.textContent = state.alerts.length;

  renderDepartmentLanding();
  renderAdminDashboardOverview();
  renderCitizenDashboard(visibleReports);

  let recentHtml = '';
  if (state.authenticated) {
    recentHtml = visibleReports.slice(0, 4).map(report => `
      <div class="list-item">
        <h4>${report.title}</h4>
        <small>${report.type} • ${report.location}</small>
        <span class="status-pill status-${report.status.toLowerCase()}">${report.status}</span>
      </div>
    `).join('');
  }

  elements.recentReports.innerHTML = recentHtml;
  elements.safetyAnnouncements.innerHTML = state.contentItems.map(item => `
    <li class="info-item"><h4>${item.title}</h4><small>${item.text}</small></li>
  `).join('');
}

function renderHospitalAmbulanceReadiness(target) {
  if (!target) return;
  const medicalUnits = state.responders.map((responder, index) => ({ ...responder, index })).filter(responder => responder.type === 'Medical');
  const availableUnits = medicalUnits.filter(responder => responder.status === 'Available');
  target.innerHTML = `
    <section class="medical-unit-readiness medical-unit-readiness-page">
      <header class="medical-unit-readiness-header">
        <div><span>HOSPITAL / RESOURCE STATUS</span><h2>Ambulance readiness</h2><p>Update the shared availability status for hospital medical units.</p></div>
        <span class="medical-unit-live-status"><i aria-hidden="true"></i>Shared responder network</span>
      </header>
      <div class="medical-unit-readiness-summary" aria-label="Ambulance readiness summary">
        <article><span>Medical units</span><strong>${medicalUnits.length}</strong><small>Configured in the response network</small></article>
        <article class="is-available"><span>Available now</span><strong>${availableUnits.length}</strong><small>Ready for assignment</small></article>
        <article class="is-unavailable"><span>Not available</span><strong>${medicalUnits.length - availableUnits.length}</strong><small>Unavailable for dispatch</small></article>
      </div>
      <div class="medical-unit-grid">
        ${medicalUnits.map(responder => `
          <article class="medical-unit-card">
            <span class="medical-unit-mark" aria-hidden="true">M</span>
            <div class="medical-unit-info"><h4>${escapeReportText(responder.name || 'Medical unit')}</h4><p>${escapeReportText(responder.location || 'Location not set')}</p></div>
            <label>Availability<select class="medical-unit-availability ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${responder.index}" data-saved-status="${escapeReportText(responder.status || 'Not Available')}" aria-label="Availability for ${escapeReportText(responder.name || 'medical unit')}">
              <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option>
              <option value="Not Available" ${responder.status !== 'Available' ? 'selected' : ''}>Not available</option>
            </select></label>
            <button type="button" class="secondary-btn medical-unit-save" data-index="${responder.index}" disabled>Save status</button>
          </article>
        `).join('') || '<p class="medical-unit-empty">No medical units are configured.</p>'}
      </div>
      <p class="medical-unit-feedback" aria-live="polite"></p>
    </section>
  `;

  target.querySelectorAll('.medical-unit-availability').forEach(select => {
    const saveButton = select.closest('.medical-unit-card').querySelector('.medical-unit-save');
    select.addEventListener('change', () => {
      saveButton.disabled = select.value === select.dataset.savedStatus;
      select.classList.toggle('is-available', select.value === 'Available');
      select.classList.toggle('is-unavailable', select.value !== 'Available');
    });
  });
  target.querySelectorAll('.medical-unit-save').forEach(button => {
    button.addEventListener('click', () => {
      const responder = state.responders[Number(button.dataset.index)];
      const select = button.closest('.medical-unit-card').querySelector('.medical-unit-availability');
      const feedback = target.querySelector('.medical-unit-feedback');
      if (!responder || !select) return;
      const previousStatus = responder.status;
      responder.status = select.value;
      if (!saveToLocalStorage()) {
        responder.status = previousStatus;
        feedback.textContent = 'Could not save unit availability. Please try again.';
        feedback.classList.add('is-error');
        return;
      }
      state.auditLogs.unshift({ description: `Hospital updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' });
      renderHospitalAmbulanceReadiness(target);
      target.querySelector('.medical-unit-feedback').textContent = `${responder.name} marked ${responder.status.toLowerCase()}.`;
      renderAuditLogs();
    });
  });
}

function renderMedicalTriage(target) {
  if (!target) return;
  const medicalReports = state.reports.filter(report => String(report.type || '').toLowerCase() === 'medical emergency');
  const activeReports = medicalReports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const pendingReports = medicalReports.filter(report => String(report.status || 'pending').toLowerCase() === 'pending');
  const priorityReports = medicalReports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase()));
  const availableUnits = state.responders.filter(responder => responder.type === 'Medical' && responder.status === 'Available');
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  const reportsByPriority = [...medicalReports].sort((left, right) =>
    (priorityOrder[String(left.priority || '').toLowerCase()] ?? 3) - (priorityOrder[String(right.priority || '').toLowerCase()] ?? 3)
  );

  target.innerHTML = `
    <section class="medical-triage-board">
      <header class="medical-triage-header">
        <div>
          <span>HOSPITAL / RESPONSE DESK</span>
          <h2>Medical triage</h2>
          <p>Review incoming medical emergencies and their current response status.</p>
        </div>
        <button type="button" class="medical-triage-all-reports">All citizen reports <span aria-hidden="true">&#8594;</span></button>
      </header>
      <div class="medical-triage-summary" aria-label="Medical triage summary">
        <article><span>Active medical cases</span><strong>${activeReports.length}</strong><small>Awaiting resolution</small></article>
        <article class="is-pending"><span>Awaiting triage</span><strong>${pendingReports.length}</strong><small>Pending assessment</small></article>
        <article class="is-priority"><span>Priority cases</span><strong>${priorityReports.length}</strong><small>Urgent or high priority</small></article>
        <article class="is-units"><span>Available medical units</span><strong>${availableUnits.length}</strong><small>Marked available</small></article>
      </div>
      <div class="medical-triage-toolbar">
        <label>Search medical cases<input type="search" class="medical-triage-search" placeholder="Patient, location, or case details" autocomplete="off" /></label>
        <label>Case status<select class="medical-triage-status"><option value="all">All cases</option><option value="pending">Pending</option><option value="responding">Responding</option><option value="resolved">Resolved</option></select></label>
        <label>Priority<select class="medical-triage-priority"><option value="all">All priorities</option><option value="urgent">Urgent</option><option value="high">High</option><option value="normal">Normal</option><option value="unassigned">Unassigned</option></select></label>
        <span class="medical-triage-count" aria-live="polite"></span>
      </div>
      <div class="medical-triage-list">
        ${reportsByPriority.map(report => {
          const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase())
            ? String(report.status).toLowerCase()
            : 'pending';
          const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase())
            ? String(report.priority).toLowerCase()
            : 'unassigned';
          const searchText = [report.title, report.location, report.submittedBy, report.contactNumber, report.description, report.priority].join(' ').toLowerCase();
          const cleanPhone = String(report.contactNumber || '').replace(/[^+\d]/g, '');
          return `<article class="medical-triage-case priority-${priority}" data-status="${status}" data-priority="${priority}" data-search="${escapeReportText(searchText)}">
            <header class="medical-triage-case-header">
              <div><span class="medical-triage-priority">${escapeReportText(report.priority || 'Priority unassigned')}</span><h3>${escapeReportText(report.title || 'Medical emergency')}</h3><p>${escapeReportText(report.location || 'Location not provided')}</p></div>
              <span class="medical-triage-status status-${status}">${escapeReportText(report.status || 'Pending')}</span>
            </header>
            <div class="medical-triage-facts">
              <span><strong>Reported by</strong>${escapeReportText(report.submittedBy || 'Unknown')}</span>
              <span><strong>Submitted</strong>${escapeReportText(report.submitted || 'Time unavailable')}</span>
              <span><strong>Contact</strong>${cleanPhone ? `<a href="tel:${cleanPhone}">${escapeReportText(report.contactNumber)}</a>` : 'Not provided'}</span>
            </div>
            <p class="medical-triage-description">${escapeReportText(report.description || 'No additional case details provided.')}</p>
            <footer><span>${escapeReportText(report.type || 'Medical Emergency')}</span><button type="button" class="secondary-btn medical-triage-details" data-report-id="${escapeReportText(report.id)}">View full report</button></footer>
          </article>`;
        }).join('')}
      </div>
      <p class="medical-triage-empty${medicalReports.length ? ' hidden' : ''}">No medical emergency reports have been submitted.</p>
      <p class="medical-triage-no-matches hidden">No medical cases match these filters.</p>
    </section>
  `;

  const search = target.querySelector('.medical-triage-search');
  const statusFilter = target.querySelector('.medical-triage-status');
  const priorityFilter = target.querySelector('.medical-triage-priority');
  const count = target.querySelector('.medical-triage-count');
  const noMatches = target.querySelector('.medical-triage-no-matches');
  const cards = Array.from(target.querySelectorAll('.medical-triage-case'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const statusMatches = statusFilter.value === 'all' || card.dataset.status === statusFilter.value;
      const priorityMatches = priorityFilter.value === 'all' || card.dataset.priority === priorityFilter.value;
      const matches = statusMatches && priorityMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'medical case' : 'medical cases'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  priorityFilter.addEventListener('change', applyFilters);
  target.querySelector('.medical-triage-all-reports').addEventListener('click', () => showSection('incomingCitizenReports'));
  target.querySelectorAll('.medical-triage-details').forEach(button => {
    button.addEventListener('click', () => openIncidentModal(button.dataset.reportId));
  });
  applyFilters();
}

function renderBfpCrewReadiness(target) {
  if (!target) return;
  const fireUnits = state.responders.map((responder, index) => ({ ...responder, index })).filter(responder => responder.type === 'Fire');
  const availableUnits = fireUnits.filter(responder => responder.status === 'Available');
  target.innerHTML = `
    <section class="fire-unit-readiness fire-unit-readiness-page">
      <header class="fire-unit-readiness-header">
        <div><span>BFP / RESOURCE STATUS</span><h2>Crew readiness</h2><p>Update fire crew and apparatus availability for the shared response network.</p></div>
        <span class="fire-unit-live-status"><i aria-hidden="true"></i>Shared responder network</span>
      </header>
      <div class="fire-unit-readiness-summary" aria-label="Fire crew readiness summary">
        <article><span>Fire units</span><strong>${fireUnits.length}</strong><small>Configured in the response network</small></article>
        <article class="is-available"><span>Available now</span><strong>${availableUnits.length}</strong><small>Ready for assignment</small></article>
        <article class="is-unavailable"><span>Not available</span><strong>${fireUnits.length - availableUnits.length}</strong><small>Unavailable for dispatch</small></article>
      </div>
      <div class="fire-unit-grid">
        ${fireUnits.map(responder => `
          <article class="fire-unit-card">
            <span class="fire-unit-mark" aria-hidden="true">F</span>
            <div><h4>${escapeReportText(responder.name || 'Fire unit')}</h4><p>${escapeReportText(responder.location || 'Location not set')}</p></div>
            <label>Availability<select class="fire-unit-availability ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${responder.index}" data-saved-status="${escapeReportText(responder.status || 'Not Available')}" aria-label="Availability for ${escapeReportText(responder.name || 'fire unit')}">
              <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option><option value="Not Available" ${responder.status !== 'Available' ? 'selected' : ''}>Not available</option>
            </select></label>
            <button type="button" class="secondary-btn fire-unit-save" data-index="${responder.index}" disabled>Save status</button>
          </article>
        `).join('') || '<p class="fire-unit-empty">No fire units are configured.</p>'}
      </div>
      <p class="fire-unit-feedback" aria-live="polite"></p>
    </section>
  `;

  target.querySelectorAll('.fire-unit-availability').forEach(select => {
    const saveButton = select.closest('.fire-unit-card').querySelector('.fire-unit-save');
    select.addEventListener('change', () => {
      saveButton.disabled = select.value === select.dataset.savedStatus;
      select.classList.toggle('is-available', select.value === 'Available');
      select.classList.toggle('is-unavailable', select.value !== 'Available');
    });
  });
  target.querySelectorAll('.fire-unit-save').forEach(button => {
    button.addEventListener('click', () => {
      const responder = state.responders[Number(button.dataset.index)];
      const select = button.closest('.fire-unit-card').querySelector('.fire-unit-availability');
      const feedback = target.querySelector('.fire-unit-feedback');
      if (!responder || !select) return;
      const previousStatus = responder.status;
      responder.status = select.value;
      if (!saveToLocalStorage()) {
        responder.status = previousStatus;
        feedback.textContent = 'Could not save fire unit availability. Please try again.';
        feedback.classList.add('is-error');
        return;
      }
      state.auditLogs.unshift({ description: `BFP updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' });
      renderBfpCrewReadiness(target);
      target.querySelector('.fire-unit-feedback').textContent = `${responder.name} marked ${responder.status.toLowerCase()}.`;
      renderAuditLogs();
    });
  });
}

function renderFireOperations(target) {
  if (!target) return;
  const fireReports = state.reports.filter(report => String(report.type || '').toLowerCase() === 'fire');
  const activeReports = fireReports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const pendingReports = fireReports.filter(report => String(report.status || 'pending').toLowerCase() === 'pending');
  const priorityReports = fireReports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase()));
  const availableUnits = state.responders.filter(responder => responder.type === 'Fire' && responder.status === 'Available');
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  const sortedReports = [...fireReports].sort((left, right) =>
    (priorityOrder[String(left.priority || '').toLowerCase()] ?? 3) - (priorityOrder[String(right.priority || '').toLowerCase()] ?? 3)
  );

  target.innerHTML = `
    <section class="fire-operations-board">
      <header class="fire-operations-header">
        <div><span>BFP / FIELD OPERATIONS</span><h2>Fire operations</h2><p>Monitor fire reports, prioritize response, and check crew availability.</p></div>
        <button type="button" class="fire-operations-all-reports">Incoming citizen reports <span aria-hidden="true">&#8594;</span></button>
      </header>
      <div class="fire-operations-summary" aria-label="Fire operations summary">
        <article><span>Active fire incidents</span><strong>${activeReports.length}</strong><small>Awaiting resolution</small></article>
        <article class="is-pending"><span>Awaiting response</span><strong>${pendingReports.length}</strong><small>Pending incidents</small></article>
        <article class="is-priority"><span>Priority incidents</span><strong>${priorityReports.length}</strong><small>Urgent or high priority</small></article>
        <article class="is-units"><span>Available fire units</span><strong>${availableUnits.length}</strong><small>${state.responders.filter(responder => responder.type === 'Fire').length} configured units</small></article>
      </div>
      <div class="fire-operations-toolbar">
        <label>Search incidents<input type="search" class="fire-operations-search" placeholder="Incident, location, or reporter" autocomplete="off" /></label>
        <label>Status<select class="fire-operations-status"><option value="open">Open cases</option><option value="all" selected>All statuses</option><option value="pending">Pending</option><option value="responding">Responding</option><option value="resolved">Resolved</option></select></label>
        <label>Priority<select class="fire-operations-priority"><option value="all">All priorities</option><option value="urgent">Urgent</option><option value="high">High</option><option value="normal">Normal</option><option value="unassigned">Unassigned</option></select></label>
        <span class="fire-operations-count" aria-live="polite"></span>
      </div>
      <div class="fire-operations-list">
        ${sortedReports.map(report => {
          const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase()) ? String(report.status).toLowerCase() : 'pending';
          const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase()) ? String(report.priority).toLowerCase() : 'unassigned';
          const searchText = [report.title, report.location, report.submittedBy, report.contactNumber, report.description, report.priority].join(' ').toLowerCase();
          const cleanPhone = String(report.contactNumber || '').replace(/[^+\d]/g, '');
          return `<article class="fire-incident-card priority-${priority}" data-status="${status}" data-priority="${priority}" data-search="${escapeReportText(searchText)}">
            <header><div><span class="fire-incident-priority">${escapeReportText(report.priority || 'Priority unassigned')}</span><h3>${escapeReportText(report.title || 'Fire incident')}</h3><p>${escapeReportText(report.location || 'Location not provided')}</p></div><span class="fire-incident-status status-${status}">${escapeReportText(report.status || 'Pending')}</span></header>
            <div class="fire-incident-facts"><span><strong>Reported by</strong>${escapeReportText(report.submittedBy || 'Unknown')}</span><span><strong>Submitted</strong>${escapeReportText(report.submitted || 'Time unavailable')}</span><span><strong>Contact</strong>${cleanPhone ? `<a href="tel:${cleanPhone}">${escapeReportText(report.contactNumber)}</a>` : 'Not provided'}</span></div>
            <p>${escapeReportText(report.description || 'No additional incident details provided.')}</p>
            <footer><span>${escapeReportText(report.type || 'Fire')}</span><button type="button" class="secondary-btn fire-incident-details" data-report-id="${escapeReportText(report.id)}">View full report</button></footer>
          </article>`;
        }).join('')}
      </div>
      <p class="fire-operations-empty${fireReports.length ? ' hidden' : ''}">No fire incident reports have been submitted.</p>
      <p class="fire-operations-no-matches hidden">No fire incidents match these filters.</p>
    </section>
  `;

  const search = target.querySelector('.fire-operations-search');
  const statusFilter = target.querySelector('.fire-operations-status');
  const priorityFilter = target.querySelector('.fire-operations-priority');
  const count = target.querySelector('.fire-operations-count');
  const noMatches = target.querySelector('.fire-operations-no-matches');
  const cards = Array.from(target.querySelectorAll('.fire-incident-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = (statusFilter.value === 'all' || (statusFilter.value === 'open' ? card.dataset.status !== 'resolved' : card.dataset.status === statusFilter.value)) &&
        (priorityFilter.value === 'all' || card.dataset.priority === priorityFilter.value) && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'fire incident' : 'fire incidents'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  priorityFilter.addEventListener('change', applyFilters);
  target.querySelector('.fire-operations-all-reports').addEventListener('click', () => showSection('incomingCitizenReports'));
  target.querySelectorAll('.fire-incident-details').forEach(button => button.addEventListener('click', () => openIncidentModal(button.dataset.reportId)));
  applyFilters();
}

function renderDisasterOperations(target) {
  if (!target) return;

  const reports = [...state.reports];
  const activeReports = reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const pendingReports = activeReports.filter(report => String(report.status || 'pending').toLowerCase() === 'pending');
  const priorityReports = activeReports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase()));
  const availableCenters = state.evacCenters.filter(center => String(center.status || '').toLowerCase() === 'available');
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  const sortedReports = reports.sort((left, right) =>
    (priorityOrder[String(left.priority || '').toLowerCase()] ?? 3) - (priorityOrder[String(right.priority || '').toLowerCase()] ?? 3)
  );

  target.innerHTML = `
    <section class="disaster-operations-board">
      <header class="disaster-operations-header">
        <div><span>MDRRMC / FIELD OPERATIONS</span><h2>Disaster coordination</h2><p>Monitor incoming incidents, prioritize community hazards, and review evacuation readiness.</p></div>
        <button type="button" class="disaster-operations-all-reports">Incoming citizen reports <span aria-hidden="true">&#8594;</span></button>
      </header>
      <div class="disaster-operations-summary" aria-label="Disaster operations summary">
        <article><span>Open incidents</span><strong>${activeReports.length}</strong><small>Awaiting resolution</small></article>
        <article class="is-pending"><span>Awaiting response</span><strong>${pendingReports.length}</strong><small>Pending incidents</small></article>
        <article class="is-priority"><span>Priority incidents</span><strong>${priorityReports.length}</strong><small>Urgent or high priority</small></article>
        <article class="is-shelter"><span>Available shelters</span><strong>${availableCenters.length}</strong><small>${state.evacCenters.length} centers monitored</small></article>
      </div>
      <div class="disaster-operations-toolbar">
        <label>Search incidents<input type="search" class="disaster-operations-search" placeholder="Incident, location, or reporter" autocomplete="off" /></label>
        <label>Status<select class="disaster-operations-status"><option value="open" selected>Open cases</option><option value="all">All statuses</option><option value="pending">Pending</option><option value="responding">Responding</option><option value="resolved">Resolved</option></select></label>
        <label>Priority<select class="disaster-operations-priority"><option value="all">All priorities</option><option value="urgent">Urgent</option><option value="high">High</option><option value="normal">Normal</option><option value="unassigned">Unassigned</option></select></label>
        <span class="disaster-operations-count" aria-live="polite"></span>
      </div>
      <div class="disaster-operations-list">
        ${sortedReports.map(report => {
          const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase()) ? String(report.status).toLowerCase() : 'pending';
          const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase()) ? String(report.priority).toLowerCase() : 'unassigned';
          const searchText = [report.title, report.type, report.location, report.submittedBy, report.contactNumber, report.description].join(' ').toLowerCase();
          return `<article class="disaster-incident-card priority-${priority}" data-status="${status}" data-priority="${priority}" data-search="${escapeReportText(searchText)}">
            <header><div><span class="disaster-incident-priority">${escapeReportText(report.priority || 'Priority unassigned')}</span><h3>${escapeReportText(report.title || report.type || 'Emergency report')}</h3><p>${escapeReportText(report.location || 'Location not provided')}</p></div><span class="disaster-incident-status status-${status}">${escapeReportText(report.status || 'Pending')}</span></header>
            <div class="disaster-incident-facts"><span><strong>Incident type</strong>${escapeReportText(report.type || 'Emergency')}</span><span><strong>Reported by</strong>${escapeReportText(report.submittedBy || 'Unknown')}</span><span><strong>Submitted</strong>${escapeReportText(report.submitted || 'Time unavailable')}</span></div>
            <p>${escapeReportText(report.description || 'No additional incident details provided.')}</p>
            <footer><button type="button" class="secondary-btn disaster-incident-details" data-report-id="${escapeReportText(report.id)}">View full report</button></footer>
          </article>`;
        }).join('')}
      </div>
      <p class="disaster-operations-empty${reports.length ? ' hidden' : ''}">No citizen incident reports have been submitted.</p>
      <p class="disaster-operations-no-matches hidden">No incidents match these filters.</p>
    </section>
  `;

  const search = target.querySelector('.disaster-operations-search');
  const statusFilter = target.querySelector('.disaster-operations-status');
  const priorityFilter = target.querySelector('.disaster-operations-priority');
  const count = target.querySelector('.disaster-operations-count');
  const noMatches = target.querySelector('.disaster-operations-no-matches');
  const cards = Array.from(target.querySelectorAll('.disaster-incident-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const statusMatches = statusFilter.value === 'all' || (statusFilter.value === 'open' ? card.dataset.status !== 'resolved' : card.dataset.status === statusFilter.value);
      const priorityMatches = priorityFilter.value === 'all' || card.dataset.priority === priorityFilter.value;
      const matches = statusMatches && priorityMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'incident' : 'incidents'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  priorityFilter.addEventListener('change', applyFilters);
  target.querySelector('.disaster-operations-all-reports').addEventListener('click', () => showSection('incomingCitizenReports'));
  target.querySelectorAll('.disaster-incident-details').forEach(button => button.addEventListener('click', () => openIncidentModal(button.dataset.reportId)));
  applyFilters();
}

function renderPoliceTeamAReadiness(target) {
  if (!target) return;
  const teams = state.responders.map((responder, index) => ({ ...responder, index }))
    .filter(responder => responder.type === 'Police');
  const availableTeams = teams.filter(responder => responder.status === 'Available');
  target.innerHTML = `
    <section class="fire-unit-readiness fire-unit-readiness-page pnp-team-readiness">
      <header class="fire-unit-readiness-header">
        <div><span>PNP / RESOURCE STATUS</span><h2>Police Team A readiness</h2><p>Update police team availability for the shared patrol response network.</p></div>
        <span class="fire-unit-live-status"><i aria-hidden="true"></i>Shared responder network</span>
      </header>
      <div class="fire-unit-readiness-summary" aria-label="Police Team A readiness summary">
        <article><span>Police teams</span><strong>${teams.length}</strong><small>Configured in the response network</small></article>
        <article class="is-available"><span>Available now</span><strong>${availableTeams.length}</strong><small>Ready for assignment</small></article>
        <article class="is-unavailable"><span>Not available</span><strong>${teams.length - availableTeams.length}</strong><small>Unavailable for patrol</small></article>
      </div>
      <div class="fire-unit-grid">
        ${teams.map(responder => `
          <article class="fire-unit-card">
            <span class="fire-unit-mark" aria-hidden="true">P</span>
            <div><h4>${escapeReportText(responder.name || 'Police team')}</h4><p>${escapeReportText(responder.location || 'Location not set')}</p></div>
            <label>Availability<select class="fire-unit-availability ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${responder.index}" data-saved-status="${escapeReportText(responder.status || 'Not Available')}" aria-label="Availability for ${escapeReportText(responder.name || 'police team')}">
              <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option><option value="Not Available" ${responder.status !== 'Available' ? 'selected' : ''}>Not available</option>
            </select></label>
            <button type="button" class="secondary-btn fire-unit-save" data-index="${responder.index}" disabled>Save status</button>
          </article>
        `).join('') || '<p class="fire-unit-empty">No Police teams are configured.</p>'}
      </div>
      <p class="fire-unit-feedback" aria-live="polite"></p>
    </section>
  `;

  target.querySelectorAll('.fire-unit-availability').forEach(select => {
    const saveButton = select.closest('.fire-unit-card').querySelector('.fire-unit-save');
    select.addEventListener('change', () => {
      saveButton.disabled = select.value === select.dataset.savedStatus;
      select.classList.toggle('is-available', select.value === 'Available');
      select.classList.toggle('is-unavailable', select.value !== 'Available');
    });
  });
  target.querySelectorAll('.fire-unit-save').forEach(button => {
    button.addEventListener('click', () => {
      const responder = state.responders[Number(button.dataset.index)];
      const select = button.closest('.fire-unit-card').querySelector('.fire-unit-availability');
      if (!responder || responder.type !== 'Police' || !select) return;

      const previousStatus = responder.status;
      responder.status = select.value;
      const auditEntry = { description: `PNP updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' };
      state.auditLogs.unshift(auditEntry);
      if (!saveToLocalStorage()) {
        responder.status = previousStatus;
        state.auditLogs.shift();
        renderPoliceTeamAReadiness(target);
        const feedback = target.querySelector('.fire-unit-feedback');
        feedback.textContent = 'Could not save police team availability. Please try again.';
        feedback.classList.add('is-error');
        return;
      }

      renderPoliceTeamAReadiness(target);
      target.querySelector('.fire-unit-feedback').textContent = `${responder.name} marked ${responder.status.toLowerCase()}.`;
      renderAuditLogs();
    });
  });
}

function renderMDRRMCResponseReadiness(target) {
  if (!target) return;
  const units = state.responders.map((responder, index) => ({ ...responder, index }))
    .filter(responder => responder.type === 'Disaster Response');
  const availableUnits = units.filter(responder => responder.status === 'Available');
  target.innerHTML = `
    <section class="fire-unit-readiness fire-unit-readiness-page mdrrmc-response-readiness">
      <header class="fire-unit-readiness-header">
        <div><span>MDRRMC / RESOURCE STATUS</span><h2>Disaster Response readiness</h2><p>Update MDRRMC team availability for the shared disaster-response network.</p></div>
        <span class="fire-unit-live-status"><i aria-hidden="true"></i>Shared responder network</span>
      </header>
      <div class="fire-unit-readiness-summary" aria-label="Disaster response readiness summary">
        <article><span>Response teams</span><strong>${units.length}</strong><small>Configured in the response network</small></article>
        <article class="is-available"><span>Available now</span><strong>${availableUnits.length}</strong><small>Ready for assignment</small></article>
        <article class="is-unavailable"><span>Not available</span><strong>${units.length - availableUnits.length}</strong><small>Unavailable for deployment</small></article>
      </div>
      <div class="fire-unit-grid">
        ${units.map(responder => `
          <article class="fire-unit-card">
            <span class="fire-unit-mark" aria-hidden="true">D</span>
            <div><h4>${escapeReportText(responder.name || 'Disaster response team')}</h4><p>${escapeReportText(responder.location || 'Location not set')}</p></div>
            <label>Availability<select class="fire-unit-availability ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${responder.index}" data-saved-status="${escapeReportText(responder.status || 'Not Available')}" aria-label="Availability for ${escapeReportText(responder.name || 'disaster response team')}">
              <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option><option value="Not Available" ${responder.status !== 'Available' ? 'selected' : ''}>Not available</option>
            </select></label>
            <button type="button" class="secondary-btn fire-unit-save" data-index="${responder.index}" disabled>Save status</button>
          </article>
        `).join('') || '<p class="fire-unit-empty">No MDRRMC response teams are configured.</p>'}
      </div>
      <p class="fire-unit-feedback" aria-live="polite"></p>
    </section>
  `;

  target.querySelectorAll('.fire-unit-availability').forEach(select => {
    const saveButton = select.closest('.fire-unit-card').querySelector('.fire-unit-save');
    select.addEventListener('change', () => {
      saveButton.disabled = select.value === select.dataset.savedStatus;
      select.classList.toggle('is-available', select.value === 'Available');
      select.classList.toggle('is-unavailable', select.value !== 'Available');
    });
  });
  target.querySelectorAll('.fire-unit-save').forEach(button => {
    button.addEventListener('click', () => {
      const responder = state.responders[Number(button.dataset.index)];
      const select = button.closest('.fire-unit-card').querySelector('.fire-unit-availability');
      if (!responder || responder.type !== 'Disaster Response' || !select) return;

      const previousStatus = responder.status;
      responder.status = select.value;
      const auditEntry = { description: `MDRRMC updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' };
      state.auditLogs.unshift(auditEntry);
      if (!saveToLocalStorage()) {
        responder.status = previousStatus;
        state.auditLogs.shift();
        renderMDRRMCResponseReadiness(target);
        const feedback = target.querySelector('.fire-unit-feedback');
        feedback.textContent = 'Could not save response team availability. Please try again.';
        feedback.classList.add('is-error');
        return;
      }

      renderMDRRMCResponseReadiness(target);
      target.querySelector('.fire-unit-feedback').textContent = `${responder.name} marked ${responder.status.toLowerCase()}.`;
      renderAuditLogs();
    });
  });
}

function renderUtilityGridOperations(target) {
  if (!target) return;

  const utilityTypes = ['other incident', 'power outage', 'utility'];
  const utilityReports = state.reports.filter(report =>
    utilityTypes.some(type => String(report.type || '').toLowerCase().includes(type))
  );
  const activeReports = utilityReports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const pendingReports = activeReports.filter(report => String(report.status || 'pending').toLowerCase() === 'pending');
  const priorityReports = activeReports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase()));
  const utilityCrews = state.responders.filter(responder => responder.type === 'Utilities');
  const availableCrews = utilityCrews.filter(responder => responder.status === 'Available');
  const priorityOrder = { urgent: 0, high: 1, normal: 2 };
  const sortedReports = [...utilityReports].sort((left, right) =>
    (priorityOrder[String(left.priority || '').toLowerCase()] ?? 3) - (priorityOrder[String(right.priority || '').toLowerCase()] ?? 3)
  );

  target.innerHTML = `
    <section class="disaster-operations-board utility-grid-board">
      <header class="disaster-operations-header">
        <div><span>ZANECO / GRID OPERATIONS</span><h2>Utility Grid</h2><p>Monitor power and utility incidents, prioritize service disruptions, and track crew availability.</p></div>
        <button type="button" class="disaster-operations-all-reports">Incoming citizen reports <span aria-hidden="true">&#8594;</span></button>
      </header>
      <div class="disaster-operations-summary" aria-label="Utility operations summary">
        <article><span>Active utility incidents</span><strong>${activeReports.length}</strong><small>Awaiting resolution</small></article>
        <article class="is-pending"><span>Awaiting response</span><strong>${pendingReports.length}</strong><small>Pending incidents</small></article>
        <article class="is-priority"><span>Priority incidents</span><strong>${priorityReports.length}</strong><small>Urgent or high priority</small></article>
        <article class="is-shelter"><span>Available utility crews</span><strong>${availableCrews.length}</strong><small>${utilityCrews.length} ${utilityCrews.length === 1 ? 'crew' : 'crews'} configured</small></article>
      </div>
      <div class="disaster-operations-toolbar">
        <label>Search incidents<input type="search" class="utility-grid-search" placeholder="Incident, location, or reporter" autocomplete="off" /></label>
        <label>Status<select class="utility-grid-status"><option value="open" selected>Open cases</option><option value="all">All statuses</option><option value="pending">Pending</option><option value="responding">Responding</option><option value="resolved">Resolved</option></select></label>
        <label>Priority<select class="utility-grid-priority"><option value="all">All priorities</option><option value="urgent">Urgent</option><option value="high">High</option><option value="normal">Normal</option><option value="unassigned">Unassigned</option></select></label>
        <span class="disaster-operations-count utility-grid-count" aria-live="polite"></span>
      </div>
      <div class="disaster-operations-list utility-grid-list">
        ${sortedReports.map(report => {
          const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase()) ? String(report.status).toLowerCase() : 'pending';
          const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase()) ? String(report.priority).toLowerCase() : 'unassigned';
          const searchText = [report.title, report.type, report.location, report.submittedBy, report.contactNumber, report.description].join(' ').toLowerCase();
          return `<article class="disaster-incident-card priority-${priority}" data-status="${status}" data-priority="${priority}" data-search="${escapeReportText(searchText)}">
            <header><div><span class="disaster-incident-priority">${escapeReportText(report.priority || 'Priority unassigned')}</span><h3>${escapeReportText(report.title || report.type || 'Utility incident')}</h3><p>${escapeReportText(report.location || 'Location not provided')}</p></div><span class="disaster-incident-status status-${status}">${escapeReportText(report.status || 'Pending')}</span></header>
            <div class="disaster-incident-facts"><span><strong>Incident type</strong>${escapeReportText(report.type || 'Utility incident')}</span><span><strong>Reported by</strong>${escapeReportText(report.submittedBy || 'Unknown')}</span><span><strong>Submitted</strong>${escapeReportText(report.submitted || 'Time unavailable')}</span></div>
            <p>${escapeReportText(report.description || 'No additional incident details provided.')}</p>
            <footer><button type="button" class="secondary-btn disaster-incident-details utility-grid-details" data-report-id="${escapeReportText(report.id)}">View full report</button></footer>
          </article>`;
        }).join('')}
      </div>
      <p class="disaster-operations-empty utility-grid-empty${utilityReports.length ? ' hidden' : ''}">No power or utility incident reports have been submitted.</p>
      <p class="disaster-operations-no-matches utility-grid-no-matches hidden">No utility incidents match these filters.</p>
    </section>
  `;

  const search = target.querySelector('.utility-grid-search');
  const statusFilter = target.querySelector('.utility-grid-status');
  const priorityFilter = target.querySelector('.utility-grid-priority');
  const count = target.querySelector('.utility-grid-count');
  const noMatches = target.querySelector('.utility-grid-no-matches');
  const cards = Array.from(target.querySelectorAll('.utility-grid-list .disaster-incident-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const statusMatches = statusFilter.value === 'all' || (statusFilter.value === 'open' ? card.dataset.status !== 'resolved' : card.dataset.status === statusFilter.value);
      const priorityMatches = priorityFilter.value === 'all' || card.dataset.priority === priorityFilter.value;
      const matches = statusMatches && priorityMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'utility incident' : 'utility incidents'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
  priorityFilter.addEventListener('change', applyFilters);
  target.querySelector('.disaster-operations-all-reports').addEventListener('click', () => showSection('incomingCitizenReports'));
  target.querySelectorAll('.utility-grid-details').forEach(button => button.addEventListener('click', () => openIncidentModal(button.dataset.reportId)));
  applyFilters();
}

function renderZanecoServiceCrewReadiness(target) {
  if (!target) return;
  const crews = state.responders.map((responder, index) => ({ ...responder, index }))
    .filter(responder => responder.type === 'Utilities');
  const availableCrews = crews.filter(responder => responder.status === 'Available');
  target.innerHTML = `
    <section class="fire-unit-readiness fire-unit-readiness-page zaneco-service-readiness">
      <header class="fire-unit-readiness-header">
        <div><span>ZANECO / RESOURCE STATUS</span><h2>Service crew readiness</h2><p>Update utility crew availability for the shared service-response network.</p></div>
        <span class="fire-unit-live-status"><i aria-hidden="true"></i>Shared responder network</span>
      </header>
      <div class="fire-unit-readiness-summary" aria-label="ZANECO service crew readiness summary">
        <article><span>Service crews</span><strong>${crews.length}</strong><small>Configured in the response network</small></article>
        <article class="is-available"><span>Available now</span><strong>${availableCrews.length}</strong><small>Ready for assignment</small></article>
        <article class="is-unavailable"><span>Not available</span><strong>${crews.length - availableCrews.length}</strong><small>Unavailable for service calls</small></article>
      </div>
      <div class="fire-unit-grid">
        ${crews.map(responder => `
          <article class="fire-unit-card">
            <span class="fire-unit-mark" aria-hidden="true">Z</span>
            <div><h4>${escapeReportText(responder.name || 'Utility service crew')}</h4><p>${escapeReportText(responder.location || 'Location not set')}</p></div>
            <label>Availability<select class="fire-unit-availability ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${responder.index}" data-saved-status="${escapeReportText(responder.status || 'Not Available')}" aria-label="Availability for ${escapeReportText(responder.name || 'utility service crew')}">
              <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option><option value="Not Available" ${responder.status !== 'Available' ? 'selected' : ''}>Not available</option>
            </select></label>
            <button type="button" class="secondary-btn fire-unit-save" data-index="${responder.index}" disabled>Save status</button>
          </article>
        `).join('') || '<p class="fire-unit-empty">No ZANECO service crews are configured.</p>'}
      </div>
      <p class="fire-unit-feedback" aria-live="polite"></p>
    </section>
  `;

  target.querySelectorAll('.fire-unit-availability').forEach(select => {
    const saveButton = select.closest('.fire-unit-card').querySelector('.fire-unit-save');
    select.addEventListener('change', () => {
      saveButton.disabled = select.value === select.dataset.savedStatus;
      select.classList.toggle('is-available', select.value === 'Available');
      select.classList.toggle('is-unavailable', select.value !== 'Available');
    });
  });
  target.querySelectorAll('.fire-unit-save').forEach(button => {
    button.addEventListener('click', () => {
      const responder = state.responders[Number(button.dataset.index)];
      const select = button.closest('.fire-unit-card').querySelector('.fire-unit-availability');
      if (!responder || responder.type !== 'Utilities' || !select) return;

      const previousStatus = responder.status;
      responder.status = select.value;
      const auditEntry = { description: `ZANECO updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' };
      state.auditLogs.unshift(auditEntry);
      if (!saveToLocalStorage()) {
        responder.status = previousStatus;
        state.auditLogs.shift();
        renderZanecoServiceCrewReadiness(target);
        const feedback = target.querySelector('.fire-unit-feedback');
        feedback.textContent = 'Could not save service crew availability. Please try again.';
        feedback.classList.add('is-error');
        return;
      }

      renderZanecoServiceCrewReadiness(target);
      target.querySelector('.fire-unit-feedback').textContent = `${responder.name} marked ${responder.status.toLowerCase()}.`;
      renderAuditLogs();
    });
  });
}

function renderAgencyOperations() {
  const role = state.userProfile && state.userProfile.role ? state.userProfile.role : 'user';
  if (role === 'pnp') {
    renderPatrolDispatch();
    renderPoliceTeamAReadiness(document.getElementById('pnpTeamReadinessList'));
    return;
  }
  if (role === 'hospital') {
    renderMedicalTriage(document.getElementById('hospitalOpsList'));
    renderHospitalAmbulanceReadiness(document.getElementById('hospitalAmbulanceReadiness'));
    return;
  }
  if (role === 'bfp') {
    renderFireOperations(document.getElementById('bfpOpsList'));
    renderBfpCrewReadiness(document.getElementById('bfpReadinessList'));
    return;
  }
  if (role === 'mdrrmc') {
    renderDisasterOperations(document.getElementById('mdrrmcOpsList'));
    renderMDRRMCResponseReadiness(document.getElementById('mdrrmcReadinessList'));
    return;
  }
  if (role === 'zaneco') {
    renderUtilityGridOperations(document.getElementById('zanecoOpsList'));
    renderZanecoServiceCrewReadiness(document.getElementById('zanecoCrewReadinessList'));
  }
}

function renderSectionData() {
  renderReports();
  renderAlerts();
  renderContacts();
  renderEvacuationCenters();
  renderSafetyTips();
  renderNotifications();
  renderProfile();
  renderIncidentManagement();
  renderAdminAlerts();
  renderResponderManagement();
  renderUserManagement();
  renderEvacuationManagement();
  renderContactManagement();
  renderContentManagement();
  renderAuditLogs();
  renderSystemSettings();
  renderAnalytics();
  renderAgencyOperations();
  const departmentReportFeed = document.getElementById('departmentIncomingReportFeed');
  if (isDepartmentRole(state.userProfile.role)) {
    renderDepartmentReportFeed(departmentReportFeed);
  } else if (departmentReportFeed) {
    releaseReportPhotoUrls(departmentReportFeed);
    departmentReportFeed.innerHTML = '';
  }
}

function renderReports() {
  if (!elements.myReportsList) return;

  let reportsToShow = state.reports;
  if (state.authenticated && state.currentSection === 'myReports') {
    reportsToShow = getVisibleReportsForRole();
  }

  if (!reportsToShow.length) {
    elements.myReportsList.innerHTML = `
      <div class="card"><p>No reports yet.</p></div>
    `;
    return;
  }
  const rows = reportsToShow.map(report => `
    <div class="table-row">
      <span>${report.title}</span>
      <span>${report.type}</span>
      <span>${report.location}</span>
      <span><span class="status-pill status-${report.status.toLowerCase()}">${report.status}</span></span>
      <span>${report.submitted}</span>
      <span><button class="secondary-btn" onclick="event.stopPropagation(); openIncidentModal(${JSON.stringify(report.id)})">View</button></span>
    </div>
  `);
  elements.myReportsList.innerHTML = `
    <div class="table">
      <div class="table-header"><span>Title</span><span>Type</span><span>Location</span><span>Status</span><span>Submitted</span></div>
      ${rows.join('')}
    </div>
  `;
}

function renderAlerts() {
  const isPnp = state.userProfile.role === 'pnp';
  const isHospital = state.userProfile.role === 'hospital';
  const standardPanel = document.getElementById('standardEmergencyAlerts');
  const pnpPanel = document.getElementById('pnpAlertCoordination');
  const hospitalPanel = document.getElementById('hospitalAlertCoordination');
  if (standardPanel) standardPanel.classList.toggle('hidden', isPnp || isHospital);

  if (isPnp || isHospital) elements.alertsList.innerHTML = '';
  else renderCitizenAlertFeed(elements.alertsList);
  if (elements.adminAlertsList) {
    elements.adminAlertsList.innerHTML = state.alerts.map(alert => `
      <div class="alert-item">
        <h4>${alert.type}</h4>
        <small>${alert.message}</small>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:10px;"> 
          <span class="status-pill status-${alert.severity === 'High' ? 'danger' : alert.severity === 'Medium' ? 'warning' : 'success'}">${alert.severity}</span>
          <small>${alert.time}</small>
        </div>
      </div>
    `).join('');
  }

  if (isPnp && pnpPanel) renderDepartmentAlertCoordination(pnpPanel, 'pnp');
  else if (pnpPanel) pnpPanel.innerHTML = '';
  if (isHospital && hospitalPanel) renderDepartmentAlertCoordination(hospitalPanel, 'hospital');
  else if (hospitalPanel) hospitalPanel.innerHTML = '';
}

function renderCitizenAlertFeed(target) {
  const highCount = state.alerts.filter(alert => String(alert.severity || '').toLowerCase() === 'high').length;
  const mediumCount = state.alerts.filter(alert => String(alert.severity || '').toLowerCase() === 'medium').length;
  const lowCount = state.alerts.length - highCount - mediumCount;
  target.innerHTML = `
    <section class="citizen-alert-center">
      <header class="citizen-alert-header">
        <div>
          <span class="citizen-alert-eyebrow">SINDANGAN / PUBLIC SAFETY</span>
          <h2>Emergency alerts</h2>
          <p>Official warnings and response updates for the community.</p>
        </div>
        <button type="button" class="citizen-alert-contact-link">Emergency contacts <span aria-hidden="true">&#8594;</span></button>
      </header>
      <div class="citizen-alert-summary" aria-label="Alert severity summary">
        <article><span>Active alerts</span><strong>${state.alerts.length}</strong></article>
        <article class="is-high"><span>High priority</span><strong>${highCount}</strong></article>
        <article class="is-medium"><span>Medium priority</span><strong>${mediumCount}</strong></article>
        <article class="is-low"><span>Other alerts</span><strong>${lowCount}</strong></article>
      </div>
      <div class="citizen-alert-toolbar">
        <label>Search alerts<input type="search" class="citizen-alert-search" placeholder="Alert type or message" autocomplete="off" /></label>
        <label>Severity
          <select class="citizen-alert-severity-filter">
            <option value="all">All alerts</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low / other</option>
          </select>
        </label>
        <span class="citizen-alert-result-count" aria-live="polite"></span>
      </div>
      <div class="citizen-alert-list">
        ${state.alerts.map(alert => {
          const severity = String(alert.severity || 'Low').toLowerCase();
          const severityClass = ['high', 'medium', 'low'].includes(severity) ? severity : 'low';
          const searchText = [alert.type, alert.message, alert.time, alert.severity].join(' ').toLowerCase();
          return `
            <article class="citizen-alert-card severity-${severityClass}" data-severity="${severityClass}" data-search="${escapeReportText(searchText)}">
              <span class="citizen-alert-marker" aria-hidden="true">!</span>
              <div class="citizen-alert-content">
                <div class="citizen-alert-card-heading"><h3>${escapeReportText(alert.type || 'Emergency alert')}</h3><span class="citizen-alert-severity">${escapeReportText(alert.severity || 'Low')} priority</span></div>
                <p>${escapeReportText(alert.message || 'No additional details provided.')}</p>
                <span class="citizen-alert-time">${escapeReportText(alert.time || 'Time unavailable')}</span>
              </div>
            </article>
          `;
        }).join('')}
      </div>
      <p class="citizen-alert-empty${state.alerts.length ? ' hidden' : ''}">No active alerts right now.</p>
      <p class="citizen-alert-no-matches hidden">No alerts match your search and severity filter.</p>
    </section>
  `;

  const search = target.querySelector('.citizen-alert-search');
  const severityFilter = target.querySelector('.citizen-alert-severity-filter');
  const resultCount = target.querySelector('.citizen-alert-result-count');
  const noMatches = target.querySelector('.citizen-alert-no-matches');
  const cards = Array.from(target.querySelectorAll('.citizen-alert-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    const selectedSeverity = severityFilter.value;
    let visible = 0;
    cards.forEach(card => {
      const severityMatches = selectedSeverity === 'all' || (selectedSeverity === 'low' ? !['high', 'medium'].includes(card.dataset.severity) : card.dataset.severity === selectedSeverity);
      const matches = severityMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resultCount.textContent = `${visible} ${visible === 1 ? 'alert' : 'alerts'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };

  search.addEventListener('input', applyFilters);
  severityFilter.addEventListener('change', applyFilters);
  target.querySelector('.citizen-alert-contact-link').addEventListener('click', () => showSection('emergencyContacts'));
  applyFilters();
}

function getAlertRecordKey(alert) {
  return String(alert.id ?? `${alert.type || ''}|${alert.message || ''}|${alert.time || ''}`);
}

function renderDepartmentAlertCoordination(target, role) {
  const reviewStateKey = role === 'hospital' ? 'hospitalReviewedAlerts' : 'pnpReviewedAlerts';
  const reviewed = new Set(Array.isArray(state[reviewStateKey]) ? state[reviewStateKey] : []);
  const highCount = state.alerts.filter(alert => String(alert.severity || '').toLowerCase() === 'high').length;
  const needsReview = state.alerts.filter(alert => !reviewed.has(getAlertRecordKey(alert))).length;
  const agencyLabel = role === 'hospital' ? 'HOSPITAL' : 'PNP';
  const pageTitle = role === 'hospital' ? 'Hospital alert coordination' : 'Alert coordination';
  const pageDescription = role === 'hospital'
    ? 'Review public warnings and acknowledge alerts received by the hospital response desk.'
    : 'Review active warnings and mark alerts acknowledged by the operations desk.';
  const reviewAction = role === 'hospital' ? 'Acknowledge' : 'Mark reviewed';
  const reviewedLabel = role === 'hospital' ? 'Acknowledged' : 'Reviewed';

  target.innerHTML = `
    <section class="pnp-alert-coordination${role === 'hospital' ? ' hospital-alert-coordination' : ''}">
      <header class="pnp-alert-header">
        <div>
          <span class="pnp-alert-eyebrow">${agencyLabel} / PUBLIC SAFETY</span>
          <h2>${pageTitle}</h2>
          <p>${pageDescription}</p>
        </div>
        <span class="pnp-alert-network"><span class="status-dot"></span>${role === 'hospital' ? 'Hospital response feed' : 'Shared alert feed'}</span>
      </header>
      <div class="pnp-alert-summary" aria-label="Alert summary">
        <article><span>Active alerts</span><strong>${state.alerts.length}</strong></article>
        <article class="is-priority"><span>High severity</span><strong>${highCount}</strong></article>
        <article class="needs-review"><span>Needs review</span><strong>${needsReview}</strong></article>
      </div>
      <div class="pnp-alert-toolbar">
        <label>Search alerts<input type="search" class="pnp-alert-search" placeholder="Alert, message, or time" autocomplete="off" /></label>
        <label>Severity
          <select class="pnp-alert-severity-filter">
            <option value="">All severities</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low / other</option>
          </select>
        </label>
        <label>Review status
          <select class="pnp-alert-review-filter">
            <option value="all">All alerts</option><option value="needs-review">Needs review</option><option value="reviewed">Reviewed</option>
          </select>
        </label>
        <span class="pnp-alert-result-count" aria-live="polite"></span>
      </div>
      <div class="pnp-alert-list">
        ${state.alerts.map(alert => {
          const key = getAlertRecordKey(alert);
          const isReviewed = reviewed.has(key);
          const severity = String(alert.severity || 'Low').toLowerCase();
          const severityClass = ['high', 'medium', 'low'].includes(severity) ? severity : 'low';
          const searchable = [alert.type, alert.message, alert.time, alert.severity].join(' ').toLowerCase();
          return `
            <article class="pnp-alert-card${isReviewed ? ' is-reviewed' : ''}" data-severity="${severityClass}" data-reviewed="${isReviewed}" data-search="${escapeReportText(searchable)}">
              <div class="pnp-alert-card-main">
                <div class="pnp-alert-card-heading">
                  <h3>${escapeReportText(alert.type || 'Emergency alert')}</h3>
                  <span class="pnp-alert-severity severity-${severityClass}">${escapeReportText(alert.severity || 'Low')}</span>
                </div>
                <p>${escapeReportText(alert.message || 'No alert details provided.')}</p>
                <span class="pnp-alert-time">${escapeReportText(alert.time || 'Time unavailable')}</span>
              </div>
              <button type="button" class="pnp-alert-review-btn" data-alert-key="${escapeReportText(key)}">${isReviewed ? reviewedLabel : reviewAction}</button>
            </article>
          `;
        }).join('')}
      </div>
      <p class="pnp-alert-empty${state.alerts.length ? ' hidden' : ''}">No active alerts are available.</p>
      <p class="pnp-alert-no-matches hidden">No alerts match these filters.</p>
    </section>
  `;

  const search = target.querySelector('.pnp-alert-search');
  const severityFilter = target.querySelector('.pnp-alert-severity-filter');
  const reviewFilter = target.querySelector('.pnp-alert-review-filter');
  const resultCount = target.querySelector('.pnp-alert-result-count');
  const noMatches = target.querySelector('.pnp-alert-no-matches');
  const cards = Array.from(target.querySelectorAll('.pnp-alert-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    const severity = severityFilter.value;
    const review = reviewFilter.value;
    let visible = 0;
    cards.forEach(card => {
      const reviewMatches = review === 'all' || (review === 'reviewed' ? card.dataset.reviewed === 'true' : card.dataset.reviewed === 'false');
      const severityMatches = !severity || (severity === 'low' ? !['high', 'medium'].includes(card.dataset.severity) : card.dataset.severity === severity);
      const matches = reviewMatches && severityMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resultCount.textContent = `${visible} ${visible === 1 ? 'alert' : 'alerts'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  severityFilter.addEventListener('change', applyFilters);
  reviewFilter.addEventListener('change', applyFilters);
  applyFilters();

  target.querySelectorAll('.pnp-alert-review-btn').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.alertKey;
      const previous = [...state[reviewStateKey]];
      state[reviewStateKey] = previous.includes(key) ? previous.filter(item => item !== key) : [...previous, key];
      if (!saveToLocalStorage()) {
        state[reviewStateKey] = previous;
        return;
      }
      renderAlerts();
    });
  });
}

function renderPatrolDispatch() {
    const target = document.getElementById('pnpOpsList');
    if (!target) return;

    const policeUnits = state.responders.filter(responder => responder.type === 'Police');
    const activeReports = state.reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
    const reservedUnits = new Set(activeReports.map(report => report.assignedUnit).filter(Boolean));
    const availableUnits = policeUnits.filter(responder => responder.status === 'Available' && !reservedUnits.has(responder.name));
    const awaitingDispatch = activeReports.filter(report => !report.assignedUnit).length;
    const priorityReports = activeReports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase())).length;

    target.innerHTML = `
      <section class="pnp-dispatch-board">
        <header class="dispatch-page-header">
          <div>
            <span class="dispatch-eyebrow">PNP / FIELD OPERATIONS</span>
            <h2>Patrol dispatch</h2>
            <p>Monitor active incidents and coordinate police response across the community.</p>
          </div>
          <button type="button" class="dispatch-all-reports">Incoming citizen reports <span aria-hidden="true">&#8594;</span></button>
        </header>
        <div class="dispatch-summary" aria-label="Dispatch summary">
          <article class="dispatch-summary-item">
            <span>Open incidents</span>
            <strong>${activeReports.length}</strong>
          </article>
          <article class="dispatch-summary-item dispatch-summary-attention">
            <span>Awaiting a unit</span>
            <strong>${awaitingDispatch}</strong>
          </article>
          <article class="dispatch-summary-item dispatch-summary-ready">
            <span>Available patrols</span>
            <strong>${availableUnits.length}</strong>
          </article>
          <article class="dispatch-summary-item dispatch-summary-priority">
            <span>Urgent / high priority</span>
            <strong>${priorityReports}</strong>
          </article>
        </div>
        <div class="dispatch-toolbar">
          <label class="dispatch-search">Search dispatches
            <input type="search" class="dispatch-search-input" placeholder="Incident, location, or reporter" autocomplete="off" />
          </label>
          <label>Status
            <select class="dispatch-status-filter">
              <option value="open" selected>Open cases</option>
              <option value="all">All statuses</option>
              <option value="pending">Pending</option>
              <option value="responding">Responding</option>
              <option value="resolved">Resolved</option>
            </select>
          </label>
          <label>Priority
            <select class="dispatch-priority-filter">
              <option value="">All priorities</option>
              <option value="urgent">Urgent</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="unspecified">Unassigned</option>
            </select>
          </label>
          <span class="dispatch-visible-count" aria-live="polite"></span>
        </div>
        <div class="dispatch-list">
          ${state.reports.map(report => {
            const status = ['pending', 'responding', 'resolved'].includes(String(report.status || '').toLowerCase())
              ? String(report.status).toLowerCase()
              : 'pending';
            const priority = ['urgent', 'high', 'normal'].includes(String(report.priority || '').toLowerCase())
              ? String(report.priority).toLowerCase()
              : 'unspecified';
            const assignedUnit = String(report.assignedUnit || '');
            const searchText = [report.title, report.type, report.location, report.submittedBy, report.contactNumber, report.description, assignedUnit].join(' ').toLowerCase();
            return `
              <article class="dispatch-card" data-report-id="${escapeReportText(report.id)}" data-status="${status}" data-priority="${priority}" data-search="${escapeReportText(searchText)}">
                <header class="dispatch-card-header">
                  <div class="dispatch-card-title">
                    <div class="dispatch-card-tags">
                      <span class="dispatch-type-tag">${escapeReportText(report.type || 'Emergency')}</span>
                      <span class="dispatch-priority-tag priority-${priority}">${escapeReportText(report.priority || 'Priority unassigned')}</span>
                    </div>
                    <h3>${escapeReportText(report.title || report.type || 'Emergency report')}</h3>
                    <p>${escapeReportText(report.location || 'Location not provided')}</p>
                  </div>
                  <span class="dispatch-status-tag status-${status}">${escapeReportText(report.status || 'Pending')}</span>
                </header>
                <div class="dispatch-report-facts">
                  <span><strong>Reported by</strong>${escapeReportText(report.submittedBy || 'Unknown')}</span>
                  <span><strong>Submitted</strong>${escapeReportText(report.submitted || 'Unknown')}</span>
                  <span><strong>Contact</strong>${report.contactNumber
                    ? `<a href="tel:${String(report.contactNumber).replace(/[^+\d]/g, '')}">${escapeReportText(report.contactNumber)}</a>`
                    : 'Not provided'}</span>
                </div>
                <p class="dispatch-description">${escapeReportText(report.description || 'No description provided')}</p>
                <footer class="dispatch-card-footer"><button type="button" class="secondary-btn dispatch-report-details" data-report-id="${escapeReportText(report.id)}">View full report</button></footer>
              </article>
            `;
          }).join('')}
        </div>
        <p class="dispatch-empty${state.reports.length ? ' hidden' : ''}">No incidents have been submitted yet. New citizen reports will appear here automatically.</p>
        <p class="dispatch-no-matches hidden">No dispatches match the selected filters.</p>
      </section>
    `;

    const searchInput = target.querySelector('.dispatch-search-input');
    const statusFilter = target.querySelector('.dispatch-status-filter');
    const priorityFilter = target.querySelector('.dispatch-priority-filter');
    const visibleCount = target.querySelector('.dispatch-visible-count');
    const noMatches = target.querySelector('.dispatch-no-matches');
    const cards = Array.from(target.querySelectorAll('.dispatch-card'));
    const applyFilters = () => {
      const query = searchInput.value.trim().toLowerCase();
      const status = statusFilter.value;
      const priority = priorityFilter.value;
      let shown = 0;
      cards.forEach(card => {
        const statusMatches = status === 'all' || (status === 'open' ? card.dataset.status !== 'resolved' : card.dataset.status === status);
        const visible = statusMatches && (!priority || card.dataset.priority === priority) && card.dataset.search.includes(query);
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      visibleCount.textContent = `${shown} ${shown === 1 ? 'dispatch' : 'dispatches'}`;
      noMatches.classList.toggle('hidden', shown > 0 || cards.length === 0);
    };
    searchInput.addEventListener('input', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    priorityFilter.addEventListener('change', applyFilters);
    target.querySelector('.dispatch-all-reports').addEventListener('click', () => showSection('incomingCitizenReports'));
    target.querySelectorAll('.dispatch-report-details').forEach(button => {
      button.addEventListener('click', () => openIncidentModal(button.dataset.reportId));
    });
    applyFilters();

}

function renderAdminAlerts() {
  if (!elements.adminAlertsList) return;
  const rows = state.alerts.map(alert => `
    <article class="admin-alert-row admin-filter-row" data-admin-row data-severity="${escapeReportText(String(alert.severity || 'low').toLowerCase())}">
      <div><span class="admin-alert-type">${escapeReportText(alert.type || 'Emergency alert')}</span><p>${escapeReportText(alert.message || '')}</p><small>${escapeReportText(alert.time || 'Time unavailable')}</small></div>
      <span class="admin-alert-severity severity-${escapeReportText(String(alert.severity || 'low').toLowerCase())}">${escapeReportText(alert.severity || 'Low')}</span>
    </article>
  `);
  elements.adminAlertsList.innerHTML = `
    ${renderAdminListToolbar('Search alerts', 'Type, message, or time', [
      { label: 'Severity', field: 'severity', options: [{ value: 'high', label: 'High' }, { value: 'medium', label: 'Medium' }, { value: 'low', label: 'Low' }] }
    ])}
    <div class="admin-alert-history">${rows.join('')}</div>
  `;
  attachAdminListFilters(elements.adminAlertsList, 'No emergency alerts have been created.');
}

function renderContacts() {
  const directoryTitle = document.getElementById('contactDirectoryTitle');
  if (directoryTitle) {
    directoryTitle.textContent = state.userProfile.role === 'pnp' ? 'PNP Contact Directory' : 'Contact Directory';
  }

  elements.contactsList.innerHTML = state.contacts.map(contact => {
    const cleanPhone = (contact.phone || '').replace(/[^+\d]/g, '');
    const mapsQuery = encodeURIComponent(`${contact.name} ${contact.department || ''}`.trim());
    const fbUrl = normalizeFacebookUrl(contact.facebook);
    const initials = (contact.name || '').split(' ').map(n => n[0]).slice(0,2).join('');
    const hasLogo = contact.logo && String(contact.logo).trim();
    return `
      <article class="contact-card">
        <div class="contact-card-heading">
          <div class="avatar">${hasLogo ? `<img src="${contact.logo}" alt="${contact.name} logo"/>` : initials}</div>
          <div class="contact-meta">
            <h4>${contact.name}</h4>
            <span class="dept">${contact.department || 'Emergency services'}</span>
          </div>
        </div>
        <div class="contact-phone-row">
          <span class="contact-phone">${contact.phone || 'Phone number unavailable'}</span>
          ${contact.phone ? `<a class="contact-btn call" href="tel:${cleanPhone}" aria-label="Call ${contact.name}">Call</a>` : ''}
        </div>
        <div class="contact-actions">
          ${contact.phone ? `<button class="contact-btn copy" data-phone="${contact.phone || ''}" aria-label="Copy ${contact.name} number">Copy number</button>` : ''}
          <a class="contact-btn map" href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener noreferrer">Map</a>
        </div>
        <div class="contact-links">
          ${contact.email ? `<a href="mailto:${contact.email}">${contact.email}</a>` : ''}
          ${fbUrl ? `<a href="${fbUrl}" target="_blank" rel="noopener noreferrer">Facebook</a>` : ''}
        </div>
      </article>
    `;
  }).join('');

  const searchInput = document.getElementById('contactSearch');
  const countLabel = document.getElementById('contactCount');
  const emptyState = document.getElementById('contactEmptyState');
  const cards = Array.from(elements.contactsList.querySelectorAll('.contact-card'));
  cards.forEach(card => { card.dataset.search = card.textContent.toLowerCase(); });

  const updateContactFilter = () => {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;
    cards.forEach(card => {
      const matches = card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });
    if (countLabel) countLabel.textContent = `${visibleCount} ${visibleCount === 1 ? 'contact' : 'contacts'}`;
    if (emptyState) emptyState.classList.toggle('hidden', visibleCount > 0);
  };

  if (searchInput) searchInput.oninput = updateContactFilter;
  updateContactFilter();

  // Attach copy handlers
  elements.contactsList.querySelectorAll('.contact-btn.copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const phone = btn.dataset.phone || '';
      if (navigator.clipboard && phone) {
        navigator.clipboard.writeText(phone).then(() => {
          btn.textContent = '✅ Copied';
          setTimeout(() => btn.textContent = '📋 Copy', 1400);
        }).catch(() => alert('Unable to copy number'));
      } else if (phone) {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = phone; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); btn.textContent = '✅ Copied'; setTimeout(() => btn.textContent = '📋 Copy', 1400); } catch(e) { alert('Copy failed'); }
        ta.remove();
      }
    });
  });
}

function renderEvacuationCenters() {
  elements.evacuationList.innerHTML = state.evacCenters.map(center => `
    <div class="evac-card">
      <h4>${center.name}</h4>
      <small>${center.address}</small>
      <p>Capacity: ${center.capacity}</p>
      <span class="status-pill ${center.status === 'Available' ? 'status-resolved' : 'status-responding'}">${center.status}</span>
    </div>
  `).join('');
  if (elements.evacManagementList) {
    const rows = state.evacCenters.map(center => `
      <div class="table-row">
        <span>${center.name}</span>
        <span>${center.address}</span>
        <span>${center.capacity}</span>
        <span>${center.status}</span>
        <span><button class="secondary-btn" data-center="${center.name}">Update</button></span>
      </div>
    `);
    elements.evacManagementList.innerHTML = `
      <div class="table">
        <div class="table-header"><span>Name</span><span>Address</span><span>Capacity</span><span>Status</span><span>Action</span></div>
        ${rows.join('')}
      </div>
    `;
  }
}

function renderSafetyTips() {
  const categoryFor = title => {
    if (/flood|water|rain/i.test(title)) return 'Flood safety';
    if (/fire/i.test(title)) return 'Fire safety';
    if (/earthquake/i.test(title)) return 'Earthquake';
    if (/first aid/i.test(title)) return 'First aid';
    return 'Preparedness';
  };
  const categories = [...new Set(state.safetyTips.map(item => categoryFor(item.title || '')))];
  elements.safetyTipsList.innerHTML = `
    <header class="safety-tips-header">
      <div><span>COMMUNITY READINESS</span><h2>Safety guides</h2><p>Practical steps to prepare for common emergencies.</p></div>
      <span class="safety-tips-count"><strong>${state.safetyTips.length}</strong> guides</span>
    </header>
    <div class="safety-tips-toolbar">
      <label>Search guides<input type="search" class="safety-tips-search" placeholder="Search by topic or advice" autocomplete="off" /></label>
      <label>Topic<select class="safety-tips-category"><option value="all">All topics</option>${categories.map(category => `<option value="${escapeReportText(category)}">${escapeReportText(category)}</option>`).join('')}</select></label>
      <span class="safety-tips-result-count" aria-live="polite"></span>
    </div>
    <div class="safety-tip-grid">
      ${state.safetyTips.map((item, index) => {
        const category = categoryFor(item.title || '');
        const searchText = `${item.title || ''} ${item.text || ''} ${category}`.toLowerCase();
        return `<article class="safety-tip-card" data-category="${escapeReportText(category)}" data-search="${escapeReportText(searchText)}">
          <div class="safety-tip-card-top"><span>${escapeReportText(category)}</span><span>${String(index + 1).padStart(2, '0')}</span></div>
          <h3>${escapeReportText(item.title || 'Safety guide')}</h3>
          <p>${escapeReportText(item.text || '')}</p>
        </article>`;
      }).join('')}
    </div>
    <p class="safety-tips-empty${state.safetyTips.length ? ' hidden' : ''}">No safety guides have been added.</p>
    <p class="safety-tips-no-matches hidden">No guides match your search.</p>
  `;

  const search = elements.safetyTipsList.querySelector('.safety-tips-search');
  const categoryFilter = elements.safetyTipsList.querySelector('.safety-tips-category');
  const resultCount = elements.safetyTipsList.querySelector('.safety-tips-result-count');
  const noMatches = elements.safetyTipsList.querySelector('.safety-tips-no-matches');
  const cards = Array.from(elements.safetyTipsList.querySelectorAll('.safety-tip-card'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = card.dataset.search.includes(query) && (categoryFilter.value === 'all' || card.dataset.category === categoryFilter.value);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resultCount.textContent = `${visible} ${visible === 1 ? 'guide' : 'guides'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);
  applyFilters();
}

function renderNotifications() {
  const role = getActiveRole();
  const isPnp = role === 'pnp';
  const notifications = getVisibleNotifications(role);
  const standardPanel = document.getElementById('standardNotificationPanel');
  const pnpPanel = document.getElementById('pnpNotificationCenter');
  if (standardPanel) standardPanel.classList.toggle('hidden', isPnp);

  if (isPnp) elements.notificationFeed.innerHTML = '';
  else renderStandardNotificationInbox(elements.notificationFeed, notifications);

  if (!isPnp || !pnpPanel) {
    if (pnpPanel) pnpPanel.innerHTML = '';
    return;
  }

  const read = new Set(Array.isArray(state.readNotifications) ? state.readNotifications : []);
  const unreadCount = notifications.filter(note => !read.has(getNotificationRecordKey(note))).length;

  pnpPanel.innerHTML = `
    <section class="pnp-notification-center">
      <header class="pnp-notification-header">
        <div>
          <span class="pnp-notification-eyebrow">PNP / OPERATIONS FEED</span>
          <h2>Dispatch notifications</h2>
          <p>Incoming citizen reports and incident response actions for the PNP desk.</p>
        </div>
        <div class="pnp-notification-header-actions">
          <span class="pnp-unread-count"><strong>${unreadCount}</strong> unread</span>
          <button type="button" class="pnp-mark-all-read" ${unreadCount ? '' : 'disabled'}>Mark all read</button>
        </div>
      </header>
      <div class="pnp-notification-toolbar">
        <label>Search notifications<input type="search" class="pnp-notification-search" placeholder="Search updates" autocomplete="off" /></label>
        <label>Show
          <select class="pnp-notification-read-filter"><option value="all">All notifications</option><option value="unread">Unread</option><option value="read">Read</option></select>
        </label>
        <span class="pnp-notification-result-count" aria-live="polite"></span>
      </div>
      <div class="pnp-notification-list">
        ${notifications.map(note => {
          const key = getNotificationRecordKey(note);
          const isRead = read.has(key);
          const category = getNotificationCategory(note);
          const display = getNotificationDisplay(note, role);
          const searchText = [display.title, display.text, category].join(' ').toLowerCase();
          return `
            <article class="pnp-notification-item${isRead ? ' is-read' : ' is-unread'}" data-read="${isRead}" data-search="${escapeReportText(searchText)}">
              <span class="pnp-notification-marker" aria-hidden="true"></span>
              <div class="pnp-notification-content">
                <div class="pnp-notification-item-meta"><span class="pnp-notification-category">${category}</span><span>${isRead ? 'Read' : 'New'}</span></div>
                <h3>${escapeReportText(display.title || 'Incident update')}</h3>
                <p>${escapeReportText(display.text || '')}</p>
              </div>
              <button type="button" class="pnp-notification-read-btn" data-notification-key="${escapeReportText(key)}">${isRead ? 'Mark unread' : 'Mark read'}</button>
            </article>
          `;
        }).join('')}
      </div>
      <p class="pnp-notification-empty${notifications.length ? ' hidden' : ''}">No incident notifications yet.</p>
      <p class="pnp-notification-no-matches hidden">No notifications match your search.</p>
    </section>
  `;

  const search = pnpPanel.querySelector('.pnp-notification-search');
  const readFilter = pnpPanel.querySelector('.pnp-notification-read-filter');
  const resultCount = pnpPanel.querySelector('.pnp-notification-result-count');
  const noMatches = pnpPanel.querySelector('.pnp-notification-no-matches');
  const cards = Array.from(pnpPanel.querySelectorAll('.pnp-notification-item'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    const readState = readFilter.value;
    let visible = 0;
    cards.forEach(card => {
      const readMatches = readState === 'all' || card.dataset.read === String(readState === 'read');
      const matches = readMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resultCount.textContent = `${visible} ${visible === 1 ? 'notification' : 'notifications'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  readFilter.addEventListener('change', applyFilters);
  applyFilters();

  const updateReadState = (keys, markRead) => {
    const previous = [...state.readNotifications];
    state.readNotifications = markRead
      ? [...new Set([...previous, ...keys])]
      : previous.filter(key => !keys.includes(key));
    if (!saveToLocalStorage()) state.readNotifications = previous;
    renderNotifications();
  };
  pnpPanel.querySelectorAll('.pnp-notification-read-btn').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.notificationKey;
      updateReadState([key], !read.has(key));
    });
  });
  pnpPanel.querySelector('.pnp-mark-all-read').addEventListener('click', () => {
    updateReadState(notifications.map(getNotificationRecordKey), true);
  });
}

function getNotificationRecordKey(note) {
  return String(note.id ?? `${note.title || ''}|${note.text || ''}`);
}

function getNotificationCategory(note) {
  if (note.eventType === 'citizen_report') return 'Incoming report';
  if (String(note.eventType || '').startsWith('action-')) return 'Response action';
  const source = `${note.title || ''} ${note.text || ''}`.toLowerCase();
  if (source.includes('report')) return 'Report update';
  if (/alert|broadcast|weather|road closure|evacuat/.test(source)) return 'Public alert';
  if (/system|maintenance/.test(source)) return 'System';
  return 'Community update';
}

function getNotificationDisplay(note, role = getActiveRole()) {
  const isAgency = isAdminRole(role) || isDepartmentRole(role);
  return isAgency
    ? { title: note.title || 'Incident update', text: note.text || '' }
    : { title: note.citizenTitle || note.title || 'Report update', text: note.citizenText || note.text || '' };
}

function getUserNotificationReadKeys() {
  const accountKey = String(state.userProfile.email || 'guest').trim().toLowerCase() || 'guest';
  const keys = state.userReadNotifications && state.userReadNotifications[accountKey];
  return Array.isArray(keys) ? keys : [];
}

function updateStandardNotificationReadState(keys, markRead) {
  const accountKey = String(state.userProfile.email || 'guest').trim().toLowerCase() || 'guest';
  const previous = state.userReadNotifications;
  const currentKeys = Array.isArray(previous[accountKey]) ? previous[accountKey] : [];
  state.userReadNotifications = {
    ...previous,
    [accountKey]: markRead
      ? [...new Set([...currentKeys, ...keys])]
      : currentKeys.filter(key => !keys.includes(key))
  };
  if (saveToLocalStorage()) return true;
  state.userReadNotifications = previous;
  return false;
}

function renderStandardNotificationInbox(target, notifications = getVisibleNotifications()) {
  const role = getActiveRole();
  const isOperations = isAdminRole(role) || isDepartmentRole(role);
  const read = new Set(getUserNotificationReadKeys());
  const unreadCount = notifications.filter(note => !read.has(getNotificationRecordKey(note))).length;
  const reportCount = notifications.filter(note => note.eventType === 'citizen_report').length;
  const actionCount = notifications.filter(note => String(note.eventType || '').startsWith('action-')).length;
  target.innerHTML = `
    <section class="citizen-notification-center">
      <header class="citizen-notification-header">
        <div><span>${isOperations ? 'OPERATIONS / INCIDENT FEED' : 'PERSONAL UPDATES'}</span><h2>Notifications</h2><p>${isOperations ? 'Incoming citizen reports and incident response actions.' : 'Updates on your submitted emergency reports.'}</p></div>
        <button type="button" class="notification-mark-all" ${unreadCount ? '' : 'disabled'}>Mark all as read</button>
      </header>
      <div class="citizen-notification-summary" aria-label="Notification summary">
        <article class="is-unread"><span>Unread</span><strong>${unreadCount}</strong></article>
        <article class="is-report"><span>${isOperations ? 'Incoming reports' : 'Your reports'}</span><strong>${reportCount}</strong></article>
        <article class="is-alert"><span>Response actions</span><strong>${actionCount}</strong></article>
      </div>
      <div class="citizen-notification-toolbar">
        <label>Search notifications<input type="search" class="citizen-notification-search" placeholder="Search messages" autocomplete="off" /></label>
        <label>Show<select class="citizen-notification-read-filter"><option value="all">All updates</option><option value="unread">Unread only</option><option value="read">Read only</option></select></label>
        <span class="citizen-notification-result-count" aria-live="polite"></span>
      </div>
      <div class="citizen-notification-list">
        ${notifications.map(note => {
          const key = getNotificationRecordKey(note);
          const isRead = read.has(key);
          const category = getNotificationCategory(note);
          const display = getNotificationDisplay(note, role);
          const searchText = [display.title, display.text, category].join(' ').toLowerCase();
          return `<article class="citizen-notification-item${isRead ? ' is-read' : ' is-unread'}" data-key="${escapeReportText(key)}" data-read="${isRead}" data-search="${escapeReportText(searchText)}">
            <span class="citizen-notification-marker" aria-hidden="true"></span>
            <div class="citizen-notification-copy">
              <div class="citizen-notification-meta"><span>${escapeReportText(category)}</span><span>${isRead ? 'Read' : 'New'}</span></div>
              <h3>${escapeReportText(display.title || 'Report update')}</h3>
              <p>${escapeReportText(display.text || '')}</p>
            </div>
            <button type="button" class="citizen-notification-read-btn" aria-pressed="${isRead}" data-key="${escapeReportText(key)}">${isRead ? 'Mark unread' : 'Mark read'}</button>
          </article>`;
        }).join('')}
      </div>
      <p class="citizen-notification-empty${notifications.length ? ' hidden' : ''}">No notifications yet.</p>
      <p class="citizen-notification-no-matches hidden">No notifications match these filters.</p>
      <p class="citizen-notification-status" aria-live="polite"></p>
    </section>
  `;

  const search = target.querySelector('.citizen-notification-search');
  const readFilter = target.querySelector('.citizen-notification-read-filter');
  const resultCount = target.querySelector('.citizen-notification-result-count');
  const noMatches = target.querySelector('.citizen-notification-no-matches');
  const status = target.querySelector('.citizen-notification-status');
  const cards = Array.from(target.querySelectorAll('.citizen-notification-item'));
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    const readState = readFilter.value;
    let visible = 0;
    cards.forEach(card => {
      const readMatches = readState === 'all' || card.dataset.read === String(readState === 'read');
      const matches = readMatches && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    resultCount.textContent = `${visible} ${visible === 1 ? 'notification' : 'notifications'}`;
    noMatches.classList.toggle('hidden', visible > 0 || cards.length === 0);
  };
  search.addEventListener('input', applyFilters);
  readFilter.addEventListener('change', applyFilters);
  target.querySelector('.notification-mark-all').addEventListener('click', () => {
    if (!updateStandardNotificationReadState(notifications.map(getNotificationRecordKey), true)) {
      status.textContent = 'Could not save this change. Please try again.';
      return;
    }
    renderNotifications();
  });
  target.querySelectorAll('.citizen-notification-read-btn').forEach(button => {
    button.addEventListener('click', () => {
      const wasRead = button.getAttribute('aria-pressed') === 'true';
      if (!updateStandardNotificationReadState([button.dataset.key], !wasRead)) {
        status.textContent = 'Could not save this change. Please try again.';
        return;
      }
      renderNotifications();
    });
  });
  applyFilters();
}

function renderProfile() {
  if (!elements.profileForm) return;
  elements.profileName.value = state.userProfile.name;
  elements.profileEmail.value = state.userProfile.email;
  elements.profilePhone.value = state.userProfile.phone;
  elements.profileEmergencyContact.value = state.userProfile.emergencyContact;
  elements.profilePassword.value = '';
  document.getElementById('profilePasswordConfirm').value = '';
  elements.profilePassword.type = 'password';
  document.getElementById('profilePasswordConfirm').type = 'password';
  elements.profileForm.querySelectorAll('[data-profile-password]').forEach(button => {
    button.textContent = 'Show';
    button.setAttribute('aria-label', button.dataset.profilePassword === 'profilePassword' ? 'Show new password' : 'Show password confirmation');
  });
  elements.profileForm.dataset.savedValues = JSON.stringify([
    elements.profileName.value,
    elements.profileEmail.value,
    elements.profilePhone.value,
    elements.profileEmergencyContact.value
  ]);
  const profileName = document.getElementById('profilePageName');
  const profileRole = document.getElementById('profilePageRole');
  const profileAvatar = document.getElementById('profilePageAvatar');
  if (profileName) profileName.textContent = state.userProfile.name || 'Your profile';
  if (profileRole) profileRole.textContent = getRoleDisplayName(state.userProfile.role);
  if (profileAvatar) {
    profileAvatar.textContent = String(state.userProfile.name || 'User').split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  }
  updateProfileDirtyState();
}

function updateProfileDirtyState() {
  const form = elements.profileForm;
  if (!form) return;
  const savedValues = JSON.parse(form.dataset.savedValues || '[]');
  const currentValues = [elements.profileName.value, elements.profileEmail.value, elements.profilePhone.value, elements.profileEmergencyContact.value];
  const passwordChanged = elements.profilePassword.value.length > 0 || document.getElementById('profilePasswordConfirm').value.length > 0;
  const isDirty = passwordChanged || currentValues.some((value, index) => value !== savedValues[index]);
  document.getElementById('profileSaveBtn').disabled = !isDirty;
  document.getElementById('profileDiscardBtn').disabled = !isDirty;
  form.classList.toggle('has-unsaved-changes', isDirty);
  const status = document.getElementById('profileSaveStatus');
  if (status && !status.classList.contains('is-error')) status.textContent = isDirty ? 'Unsaved changes' : 'No unsaved changes';
}

function renderAdminListToolbar(searchLabel, placeholder, filters = []) {
  return `
    <div class="admin-list-toolbar">
      <label><span>${escapeReportText(searchLabel)}</span><input type="search" class="admin-list-search" placeholder="${escapeReportText(placeholder)}" autocomplete="off" /></label>
      ${filters.map(filter => `
        <label>${escapeReportText(filter.label)}
          <select class="admin-list-filter" data-admin-filter="${escapeReportText(filter.field)}">
            <option value="all">All</option>
            ${filter.options.map(option => `<option value="${escapeReportText(option.value)}">${escapeReportText(option.label)}</option>`).join('')}
          </select>
        </label>
      `).join('')}
      <span class="admin-list-count" aria-live="polite"></span>
    </div>
    <p class="admin-list-empty hidden"></p>
  `;
}

function attachAdminListFilters(target, emptyMessage = 'No records have been added yet.') {
  const search = target.querySelector('.admin-list-search');
  const count = target.querySelector('.admin-list-count');
  const empty = target.querySelector('.admin-list-empty');
  if (!search || !count || !empty) return;

  const rows = Array.from(target.querySelectorAll('[data-admin-row]'));
  const filters = Array.from(target.querySelectorAll('.admin-list-filter'));
  const roleTabs = Array.from(target.querySelectorAll('[data-admin-role-tab]'));
  let selectedRole = 'all';
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    rows.forEach(row => {
      const searchMatches = row.textContent.toLowerCase().includes(query);
      const roleMatches = selectedRole === 'all' || String(row.dataset.role || '').toLowerCase() === selectedRole;
      const filtersMatch = filters.every(filter => {
        const expected = filter.value;
        return expected === 'all' || String(row.dataset[filter.dataset.adminFilter] || '').toLowerCase() === expected.toLowerCase();
      });
      const matches = searchMatches && roleMatches && filtersMatch;
      row.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? 'record' : 'records'}`;
    empty.textContent = rows.length ? 'No records match these filters.' : emptyMessage;
    empty.classList.toggle('hidden', visible > 0);
  };
  search.addEventListener('input', applyFilters);
  filters.forEach(filter => filter.addEventListener('change', applyFilters));
  roleTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      selectedRole = tab.dataset.adminRoleTab;
      roleTabs.forEach(roleTab => {
        const isSelected = roleTab === tab;
        roleTab.classList.toggle('is-active', isSelected);
        roleTab.setAttribute('aria-pressed', String(isSelected));
      });
      applyFilters();
    });
  });
  applyFilters();
}

function renderIncidentManagement() {
  if (!elements.incidentTable) return;
  const pendingCount = state.reports.filter(report => (report.status || 'Pending') === 'Pending').length;
  const respondingCount = state.reports.filter(report => report.status === 'Responding').length;
  const resolvedCount = state.reports.filter(report => report.status === 'Resolved').length;
  const priorityCount = state.reports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase())).length;
  const rows = state.reports.map(report => `
    <div class="table-row admin-filter-row" data-admin-row data-status="${escapeReportText(String(report.status || 'Pending').toLowerCase())}" data-priority="${escapeReportText(String(report.priority || 'unspecified').toLowerCase())}" data-report-id="${escapeReportText(report.id)}">
      <span data-label="Incident">${escapeReportText(report.title || report.type || 'Emergency report')}</span>
      <span data-label="Location">${escapeReportText(report.location || 'Location not provided')}</span>
      <span data-label="Type">${escapeReportText(report.type || 'Emergency')}</span>
      <span data-label="Status"><select data-id="${report.id}" class="status-select" onclick="event.stopPropagation()">
        <option value="Pending" ${report.status === 'Pending' ? 'selected' : ''}>Pending</option>
        <option value="Responding" ${report.status === 'Responding' ? 'selected' : ''}>Responding</option>
        <option value="Resolved" ${report.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
      </select></span>
      <span data-label="Action"><span class="incident-row-actions"><button type="button" class="secondary-btn" onclick="openIncidentModal(${JSON.stringify(report.id)})">View details</button><button type="button" class="user-delete-btn incident-delete-btn" data-report-id="${escapeReportText(report.id)}">Delete</button></span></span>
    </div>
  `);
  elements.incidentTable.innerHTML = `
    <header class="incident-management-header">
      <div>
        <span class="incident-management-eyebrow">OPERATIONS / LIVE QUEUE</span>
        <h2>Incident management</h2>
        <p>Review incoming reports, coordinate response, and keep case status current.</p>
      </div>
      <span class="incident-live-indicator"><i aria-hidden="true"></i> Live queue</span>
    </header>
    <div class="incident-queue-metrics" aria-label="Incident queue summary">
      <article class="incident-queue-metric"><span>Awaiting triage</span><strong>${pendingCount}</strong><small>Pending reports</small></article>
      <article class="incident-queue-metric is-responding"><span>Responding</span><strong>${respondingCount}</strong><small>Teams in action</small></article>
      <article class="incident-queue-metric is-resolved"><span>Resolved</span><strong>${resolvedCount}</strong><small>Cases closed</small></article>
      <article class="incident-queue-metric is-priority"><span>Priority cases</span><strong>${priorityCount}</strong><small>Urgent or high priority</small></article>
    </div>
    ${renderAdminListToolbar('Search incidents', 'Title, location, incident type', [
      { label: 'Status', field: 'status', options: [{ value: 'pending', label: 'Pending' }, { value: 'responding', label: 'Responding' }, { value: 'resolved', label: 'Resolved' }] },
      { label: 'Priority', field: 'priority', options: [{ value: 'urgent', label: 'Urgent' }, { value: 'high', label: 'High' }, { value: 'normal', label: 'Normal' }, { value: 'unspecified', label: 'Unassigned' }] }
    ])}
    <div class="table">
      <div class="table-header"><span>Title</span><span>Location</span><span>Type</span><span>Status</span><span>Action</span></div>
      ${rows.join('')}
    </div>
  `;
  attachAdminListFilters(elements.incidentTable, 'No incidents have been submitted.');
  elements.incidentTable.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', event => {
      const report = state.reports.find(item => String(item.id) === String(event.target.dataset.id));
      if (report) {
        const oldStatus = report.status;
        report.status = event.target.value;
        syncSystem.notify('incident_updated', { reportId: report.id, oldStatus, newStatus: report.status, title: report.title });
        state.auditLogs.unshift({ description: `Admin updated incident #${report.id} status from ${oldStatus} to ${report.status}.`, time: 'Just now' });
        saveToLocalStorage();
        if (oldStatus !== report.status) recordIncidentActionNotification(report, `status changed from ${oldStatus} to ${report.status}`);
      }
      renderDashboard();
      renderReports();
      renderIncidentManagement();
      renderAuditLogs();
    });
  });
  elements.incidentTable.querySelectorAll('.incident-delete-btn').forEach(button => {
    button.addEventListener('click', () => deleteIncidentReport(button.dataset.reportId));
  });
}

async function deleteIncidentReport(reportId) {
  const report = state.reports.find(item => String(item.id) === String(reportId));
  if (!report) return;
  const reportName = report.title || report.type || `Incident #${report.id}`;
  if (!confirm(`Delete "${reportName}"? This will permanently remove the incident report.`)) return;

  const previousReports = state.reports;
  const imageIds = getOriginalReportImageIds([report]);
  state.reports = state.reports.filter(item => String(item.id) !== String(reportId));
  if (!saveToLocalStorage()) {
    state.reports = previousReports;
    alert('The incident report could not be deleted because browser storage failed.');
    return;
  }

  try {
    await deleteOriginalReportImages(imageIds);
  } catch (error) {
    console.warn(error.message);
  }
  state.auditLogs.unshift({ description: `Admin deleted incident report #${report.id}.`, time: 'Just now' });
  renderDashboard();
  renderSectionData();
}

function openIncidentModal(reportId) {
  const report = state.reports.find(r => String(r.id) === String(reportId));
  if (!report) return;
  
  elements.modalReportId.textContent = report.id;
  elements.modalSubmittedBy.textContent = report.submittedBy || 'Unknown';
  elements.modalSubmitterEmail.textContent = report.submitterEmail || 'N/A';
  elements.modalIncidentType.textContent = report.type;
  elements.modalIncidentPriority.textContent = report.priority || 'Not specified';
  elements.modalIncidentTitle2.textContent = report.title;
  elements.modalIncidentLocation.textContent = report.location;
  elements.modalIncidentDescription.textContent = report.description || 'No description provided';
  elements.modalIncidentContact.textContent = report.contactNumber || 'Not provided';
  elements.modalIncidentAttachments.textContent = Array.isArray(report.attachmentNames) && report.attachmentNames.length
    ? report.attachmentNames.join(', ')
    : 'None';
  elements.modalIncidentTime.textContent = report.submitted;
  elements.modalStatusSelect.value = report.status;
  // Show response notes only to the report submitter (user view).
  const isAdmin = state.mode === 'admin' || (state.userProfile && state.userProfile.role === 'admin');
  const isSubmitter = state.userProfile && state.userProfile.email && state.userProfile.email === report.submitterEmail;

  if (isAdmin) {
    // Admin: allow entering a response note but do not show existing user-visible notes here.
    elements.modalResponseNotes.value = '';
    elements.modalResponseNotes.placeholder = 'Write response note (visible to the submitting user)';
    elements.modalResponseNotes.readOnly = false;
    elements.modalStatusSelect.disabled = false;
    elements.updateIncidentBtn.style.display = 'inline-block';
  } else {
    // Non-admin (user): show existing response notes read-only only if they are the submitter.
    elements.modalResponseNotes.value = isSubmitter ? (report.responseNotes || '') : '';
    elements.modalResponseNotes.readOnly = true;
    elements.modalResponseNotes.placeholder = '';
    elements.modalStatusSelect.disabled = true;
    elements.updateIncidentBtn.style.display = isSubmitter ? 'none' : 'none';
  }

  // Render media if present
  let mediaContainer = document.getElementById('modalMediaContainer');
  if (!mediaContainer) {
    mediaContainer = document.createElement('div');
    mediaContainer.id = 'modalMediaContainer';
    mediaContainer.style.marginTop = '12px';
    elements.incidentModal.querySelector('.modal-body').appendChild(mediaContainer);
  }
  releaseReportPhotoUrls(mediaContainer);
  mediaContainer.innerHTML = '';
  if (report.media && report.media.dataUrl) {
    if ((report.media.type || '').startsWith('image/')) {
      const img = document.createElement('img');
      img.src = report.media.dataUrl;
      img.alt = report.media.name || 'Incident media';
      img.style.maxWidth = '100%';
      img.style.borderRadius = '6px';
      mediaContainer.appendChild(img);
    } else if ((report.media.type || '').startsWith('video/')) {
      const vid = document.createElement('video');
      vid.src = report.media.dataUrl;
      vid.controls = true;
      vid.style.maxWidth = '100%';
      vid.style.borderRadius = '6px';
      mediaContainer.appendChild(vid);
    } else {
      const link = document.createElement('a');
      link.href = report.media.dataUrl;
      link.textContent = report.media.name || 'Download media';
      link.target = '_blank';
      mediaContainer.appendChild(link);
    }
  }
  (Array.isArray(report.attachments) ? report.attachments : []).forEach(attachment => {
    if (attachment.type !== 'image/jpeg' || !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(attachment.dataUrl || '')) return;
    const figure = document.createElement('figure');
    figure.className = 'incident-photo';
    const image = document.createElement('img');
    image.src = attachment.dataUrl;
    image.alt = attachment.name || 'Citizen report photo';
    image.dataset.originalImageId = attachment.originalImageId || '';
    figure.appendChild(image);
    if (attachment.name) {
      const caption = document.createElement('figcaption');
      caption.textContent = attachment.name;
      figure.appendChild(caption);
    }
    mediaContainer.appendChild(figure);
    showOriginalReportImage(image).catch(error => console.warn(error.message));
  });
  
  elements.incidentModal.classList.remove('hidden');
  elements.incidentModal.dataset.currentReportId = reportId;
}

function closeIncidentModal() {
  const mediaContainer = document.getElementById('modalMediaContainer');
  if (mediaContainer) releaseReportPhotoUrls(mediaContainer);
  elements.incidentModal.classList.add('hidden');
  delete elements.incidentModal.dataset.currentReportId;
}

function updateIncidentFromModal() {
  const reportId = Number(elements.incidentModal.dataset.currentReportId);
  const report = state.reports.find(r => r.id === reportId);
  if (!report) return;
  // Only admins can update incident status or set response notes.
  const isAdmin = state.mode === 'admin' || (state.userProfile && state.userProfile.role === 'admin');
  if (!isAdmin) {
    alert('Only administrators can update incidents.');
    return;
  }

  const newStatus = elements.modalStatusSelect.value;
  const newNotes = elements.modalResponseNotes.value;
  const actionDetails = [];

  if (report.status !== newStatus) {
    const oldStatus = report.status;
    report.status = newStatus;
    actionDetails.push(`status changed from ${oldStatus} to ${report.status}`);
    syncSystem.notify('incident_updated', { reportId: report.id, oldStatus, newStatus: report.status, title: report.title });
    state.auditLogs.unshift({ description: `Admin updated incident #${report.id} status from ${oldStatus} to ${report.status}.`, time: 'Just now' });
    saveToLocalStorage();
  }

  if (newNotes && report.responseNotes !== newNotes) {
    report.responseNotes = newNotes;
    actionDetails.push('a response note was added');
    state.auditLogs.unshift({ description: `Admin added response note to incident #${report.id}.`, time: 'Just now' });
    saveToLocalStorage();
  }

  if (actionDetails.length) recordIncidentActionNotification(report, actionDetails.join('; '));

  alert('Incident updated successfully.');
  closeIncidentModal();
  renderIncidentManagement();
  renderAuditLogs();
}

function renderResponderManagement() {
  if (!elements.responderList) return;
  const availableCount = state.responders.filter(responder => responder.status === 'Available').length;
  const unavailableCount = state.responders.length - availableCount;
  const rows = state.responders.map((responder, index) => `
    <div class="table-row admin-filter-row responder-row" data-admin-row data-status="${escapeReportText(String(responder.status || '').toLowerCase())}" data-type="${escapeReportText(String(responder.type || '').toLowerCase())}">
      <span class="responder-name" data-label="Responder">${escapeReportText(responder.name)}</span>
      <span data-label="Service"><span class="responder-service-tag">${escapeReportText(responder.type)}</span></span>
      <span class="responder-location" data-label="Location">${escapeReportText(responder.location)}</span>
      <span class="responder-availability" data-label="Availability">
        <select class="responder-status-select ${responder.status === 'Available' ? 'is-available' : 'is-unavailable'}" data-index="${index}" aria-label="Availability for ${escapeReportText(responder.name)}">
          <option value="Available" ${responder.status === 'Available' ? 'selected' : ''}>Available</option>
          <option value="Not Available" ${responder.status === 'Not Available' ? 'selected' : ''}>Not Available</option>
        </select>
      </span>
    </div>
  `);
  elements.responderList.innerHTML = `
    <div class="responder-readiness" aria-label="Responder readiness summary">
      <article class="responder-readiness-total"><span>Total units</span><strong>${state.responders.length}</strong></article>
      <article class="responder-readiness-available"><span>Available</span><strong>${availableCount}</strong></article>
      <article class="responder-readiness-unavailable"><span>Not available</span><strong>${unavailableCount}</strong></article>
    </div>
    ${renderAdminListToolbar('Search responders', 'Name, service, or location', [
      { label: 'Availability', field: 'status', options: [{ value: 'available', label: 'Available' }, { value: 'not available', label: 'Not available' }] }
    ])}
    <div class="table admin-table-4">
      <div class="table-header"><span>Responder</span><span>Service</span><span>Location</span><span>Availability</span></div>
      ${rows.join('')}
    </div>
  `;
  attachAdminListFilters(elements.responderList, 'No responders have been configured.');

  elements.responderList.querySelectorAll('select.responder-status-select').forEach(select => {
    const index = Number(select.dataset.index);
    select.addEventListener('change', () => {
      const responder = state.responders[index];
      if (!responder) return;
      responder.status = select.value;
      saveToLocalStorage();
      state.auditLogs.unshift({ description: `Admin updated ${responder.name} availability to ${responder.status}.`, time: 'Just now' });
      renderAuditLogs();
      renderSectionData();
    });
  });
}

function renderUserManagement() {
  if (!elements.userManagementList) return;
  const users = state.users;
  const roleGroups = [
    { value: 'all', label: 'All accounts' },
    { value: 'user', label: 'USER' },
    { value: 'admin', label: 'ADMIN' },
    { value: 'pnp', label: 'PNP' },
    { value: 'hospital', label: 'HOSPITAL' },
    { value: 'bfp', label: 'BFP' },
    { value: 'mdrrmc', label: 'MDRRMC' },
    { value: 'zaneco', label: 'ZANECO' }
  ];
  const rows = users.map((user, index) => `
    <div class="table-row admin-filter-row" data-admin-row data-role="${escapeReportText(String(user.role || '').toLowerCase())}" data-status="${escapeReportText(String(user.status || '').toLowerCase())}">
      <span>${escapeReportText(user.name || 'Unnamed user')}</span>
      <span>${escapeReportText(user.email || 'No email')}</span>
      <span><span class="admin-role-tag" data-role="${escapeReportText(String(user.role || 'user').toLowerCase())}">${escapeReportText(String(user.role || 'USER').toUpperCase())}</span></span>
      <span>${escapeReportText(user.status || 'Active')}</span>
      <span class="user-detail-cell"><span class="user-management-actions"><button type="button" class="secondary-btn user-view-btn" data-index="${index}" aria-expanded="false" aria-controls="user-profile-details-${index}">View details</button>${user.email === state.userProfile.email ? '<span class="current-account-label">Current account</span>' : `<button type="button" class="user-delete-btn" data-index="${index}">Delete</button>`}</span><span class="user-detail-panel hidden" id="user-profile-details-${index}"><strong>Profile details</strong><dl><div><dt>Account email</dt><dd>${escapeReportText(user.email || 'Not provided')}</dd></div><div><dt>Phone</dt><dd>${escapeReportText(user.phone || 'Not provided')}</dd></div><div><dt>Emergency contact</dt><dd>${escapeReportText(user.emergencyContact || 'Not provided')}</dd></div><div><dt>Account role</dt><dd>${escapeReportText(user.role || 'USER')}</dd></div><div><dt>Account status</dt><dd>${escapeReportText(user.status || 'Active')}</dd></div></dl></span></span>
    </div>
  `);
  elements.userManagementList.innerHTML = `
    <div class="user-role-tabs" role="group" aria-label="Filter accounts by role">
      ${roleGroups.map((group, index) => {
        const groupCount = group.value === 'all' ? users.length : users.filter(user => String(user.role || '').toLowerCase() === group.value).length;
        return `<button type="button" class="user-role-tab${index === 0 ? ' is-active' : ''}" data-admin-role-tab="${group.value}" aria-pressed="${index === 0}"><span>${group.label}</span><strong>${groupCount}</strong></button>`;
      }).join('')}
    </div>
    ${renderAdminListToolbar('Search accounts', 'Name or email', [
      { label: 'Status', field: 'status', options: [...new Set(users.map(user => String(user.status || '').toLowerCase()).filter(Boolean))].map(status => ({ value: status, label: status[0].toUpperCase() + status.slice(1) })) }
    ])}
    <div class="table">
      <div class="table-header"><span>Name</span><span>Email</span><span>Role</span><span>Status</span><span>Action</span></div>
      ${rows.join('')}
    </div>
  `;
  attachAdminListFilters(elements.userManagementList, 'No user accounts are registered.');

  elements.userManagementList.querySelectorAll('.user-view-btn').forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('.user-detail-cell').querySelector('.user-detail-panel');
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.textContent = expanded ? 'View details' : 'Hide details';
      details.classList.toggle('hidden', expanded);
    });
  });

  elements.userManagementList.querySelectorAll('.user-delete-btn').forEach(button => {
    button.addEventListener('click', () => deleteManagedUser(Number(button.dataset.index)));
  });
}

async function deleteManagedUser(index) {
  const user = state.users[index];
  if (!user) return;
  if (user.email === state.userProfile.email) return;

  const isAdmin = String(user.role || '').toLowerCase() === 'admin';
  const remainingAdmins = state.authUsers.filter(account =>
    String(account.role || '').toLowerCase() === 'admin' && account.email !== user.email
  ).length;
  if (isAdmin && remainingAdmins === 0) {
    alert('The last administrator account cannot be deleted.');
    return;
  }
  const normalizedEmail = String(user.email || '').trim().toLowerCase();
  const reportsToDelete = normalizedEmail
    ? state.reports.filter(report => String(report.submitterEmail || '').trim().toLowerCase() === normalizedEmail)
    : [];
  const reportMessage = reportsToDelete.length
    ? ` Their ${reportsToDelete.length} incident ${reportsToDelete.length === 1 ? 'report' : 'reports'} will also be deleted.`
    : '';
  if (!confirm(`Delete ${user.name || user.email} and remove their login access?${reportMessage} This cannot be undone.`)) return;

  const previousUsers = state.users;
  const previousAuthUsers = state.authUsers;
  const previousReports = state.reports;
  const imageIds = getOriginalReportImageIds(reportsToDelete);
  state.users = state.users.filter((item, itemIndex) => itemIndex !== index);
  state.authUsers = state.authUsers.filter(account => account.email !== user.email);
  state.reports = state.reports.filter(report =>
    !normalizedEmail || String(report.submitterEmail || '').trim().toLowerCase() !== normalizedEmail
  );
  if (!saveToLocalStorage()) {
    state.users = previousUsers;
    state.authUsers = previousAuthUsers;
    state.reports = previousReports;
    alert('The user could not be deleted because browser storage failed.');
    return;
  }

  try {
    await deleteOriginalReportImages(imageIds);
  } catch (error) {
    console.warn(error.message);
  }
  state.auditLogs.unshift({ description: `Admin deleted user account ${user.email}.`, time: 'Just now' });
  renderDashboard();
  renderSectionData();
}

function updateEvacuationCenter(index, row) {
  const center = state.evacCenters[index];
  if (!center || !row) return;
  const capacity = row.querySelector('.evac-capacity-input').value.trim();
  const status = row.querySelector('.evac-status-select').value;
  const saveButton = row.querySelector('.evac-save-btn');
  if (!capacity) {
    row.querySelector('.evac-capacity-input').focus();
    return;
  }

  state.evacCenters[index] = {
    ...center,
    capacity,
    status
  };
  if (!saveToLocalStorage()) {
    state.evacCenters[index] = center;
    saveButton.textContent = 'Retry save';
    return;
  }
  state.auditLogs.unshift({ description: `Admin updated ${center.name} evacuation center.`, time: 'Just now' });
  renderSectionData();
}

function parseEvacuationCapacity(value) {
  const match = String(value || '').match(/^\s*(\d+)\s*\/\s*(\d+)\s*$/);
  if (!match) return null;
  const occupied = Number(match[1]);
  const total = Number(match[2]);
  if (!total) return null;
  return { occupied, total, percentage: Math.min(100, Math.round((occupied / total) * 100)) };
}

function renderEvacuationManagement() {
  if (!elements.evacManagementList) return;
  const parsedCapacities = state.evacCenters.map(center => parseEvacuationCapacity(center.capacity));
  const totalOccupied = parsedCapacities.reduce((sum, capacity) => sum + (capacity ? capacity.occupied : 0), 0);
  const totalCapacity = parsedCapacities.reduce((sum, capacity) => sum + (capacity ? capacity.total : 0), 0);
  const availableCount = state.evacCenters.filter(center => String(center.status || '').toLowerCase() === 'available').length;
  const attentionCount = state.evacCenters.length - availableCount;
  const occupancyPercentage = totalCapacity ? Math.min(100, Math.round((totalOccupied / totalCapacity) * 100)) : 0;
  const rows = state.evacCenters.map((center, index) => {
    const capacity = parseEvacuationCapacity(center.capacity);
    const status = String(center.status || 'Available').toLowerCase();
    return `
      <div class="table-row admin-filter-row evacuation-center-row" data-admin-row data-status="${escapeReportText(status)}">
      <span data-label="Center"><strong class="evac-center-name">${escapeReportText(center.name)}</strong></span>
      <span data-label="Address">${escapeReportText(center.address)}</span>
      <span data-label="Occupancy"><span class="evac-capacity-cell">
        <span class="evac-capacity-usage">${capacity ? `${capacity.occupied} of ${capacity.total} occupied` : 'Enter as occupied/total'}</span>
        <span class="evac-capacity-track" role="progressbar" aria-label="Occupancy for ${escapeReportText(center.name)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${capacity ? capacity.percentage : 0}"><span style="width:${capacity ? capacity.percentage : 0}%"></span></span>
        <input class="evac-capacity-input" aria-label="Occupied and total capacity for ${escapeReportText(center.name)}" value="${escapeReportText(center.capacity)}" />
      </span></span>
      <span data-label="Status"><select class="evac-status-select status-${escapeReportText(status)}" aria-label="Status for ${escapeReportText(center.name)}">
        <option value="Available" ${center.status === 'Available' ? 'selected' : ''}>Available</option>
        <option value="Limited" ${center.status === 'Limited' ? 'selected' : ''}>Limited</option>
        <option value="Closed" ${center.status === 'Closed' ? 'selected' : ''}>Closed</option>
      </select></span>
      <span data-label="Action"><button type="button" class="secondary-btn evac-save-btn" data-index="${index}">Save changes</button></span>
      </div>
    `;
  });
  elements.evacManagementList.innerHTML = `
    <header class="evac-management-header">
      <div>
        <span class="evac-management-eyebrow">ADMINISTRATOR / SHELTER NETWORK</span>
        <h2>Evacuation centers</h2>
        <p>Monitor shelter availability and update occupancy as residents arrive.</p>
      </div>
      <span class="evac-network-badge"><i aria-hidden="true"></i> Network status</span>
    </header>
    <div class="evac-management-summary" aria-label="Evacuation center summary">
      <article><span>Centers monitored</span><strong>${state.evacCenters.length}</strong><small>Across the municipality</small></article>
      <article class="is-available"><span>Available</span><strong>${availableCount}</strong><small>Open to evacuees</small></article>
      <article class="is-attention"><span>Needs attention</span><strong>${attentionCount}</strong><small>Limited or closed</small></article>
      <article class="is-occupancy"><span>Total occupancy</span><strong>${totalOccupied} <small>/ ${totalCapacity}</small></strong><div class="evac-summary-track" role="progressbar" aria-label="Combined shelter occupancy" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${occupancyPercentage}"><span style="width:${occupancyPercentage}%"></span></div></article>
    </div>
    ${renderAdminListToolbar('Search centers', 'Name or address', [
      { label: 'Availability', field: 'status', options: [{ value: 'available', label: 'Available' }, { value: 'limited', label: 'Limited' }, { value: 'closed', label: 'Closed' }] }
    ])}
    <div class="table">
      <div class="table-header"><span>Name</span><span>Address</span><span>Capacity</span><span>Status</span><span>Action</span></div>
      ${rows.join('')}
    </div>
  `;
  attachAdminListFilters(elements.evacManagementList, 'No evacuation centers have been configured.');

  elements.evacManagementList.querySelectorAll('.evac-capacity-input').forEach(input => {
    input.addEventListener('input', () => {
      const capacity = parseEvacuationCapacity(input.value);
      const row = input.closest('.evacuation-center-row');
      const usage = row.querySelector('.evac-capacity-usage');
      const progress = row.querySelector('.evac-capacity-track');
      usage.textContent = capacity ? `${capacity.occupied} of ${capacity.total} occupied` : 'Enter as occupied/total';
      progress.setAttribute('aria-valuenow', String(capacity ? capacity.percentage : 0));
      progress.firstElementChild.style.width = `${capacity ? capacity.percentage : 0}%`;
    });
  });

  elements.evacManagementList.querySelectorAll('.evac-save-btn').forEach(button => {
    const index = Number(button.dataset.index);
    button.addEventListener('click', () => updateEvacuationCenter(index, button.closest('.table-row')));
  });
}

function editContact(index) {
  const contact = state.contacts[index];
  if (!contact) return;
  const form = document.getElementById('adminContactForm');
  if (!form) return;
  form.dataset.editIndex = String(index);
  form.querySelector('#adminContactFormTitle').textContent = 'Edit contact';
  form.querySelector('[type="submit"]').textContent = 'Save changes';
  form.elements.contactName.value = contact.name || '';
  form.elements.contactDepartment.value = contact.department || '';
  form.elements.contactPhone.value = contact.phone || '';
  form.elements.contactEmail.value = contact.email || '';
  form.elements.contactFacebook.value = contact.facebook || '';
  form.querySelector('.admin-contact-form-message').textContent = '';
  form.classList.remove('hidden');
  form.elements.contactName.focus();
}

function deleteContact(index) {
  const contact = state.contacts[index];
  if (!contact) return;
  const confirmDelete = confirm(`Delete emergency contact ${contact.name}?`);
  if (!confirmDelete) return;

  const previousContacts = [...state.contacts];
  state.contacts.splice(index, 1);
  if (!saveToLocalStorage()) {
    state.contacts = previousContacts;
    alert('The contact could not be deleted because browser storage failed.');
    return;
  }
  state.auditLogs.unshift({ description: `Admin deleted emergency contact ${contact.name}.`, time: 'Just now' });
  renderSectionData();
}

function renderContactManagement() {
  if (!elements.contactManagementList) return;
  const departments = [...new Set(state.contacts.map(contact => String(contact.department || '').trim()).filter(Boolean))].sort();
  const phoneCount = state.contacts.filter(contact => String(contact.phone || '').trim()).length;
  const emailCount = state.contacts.filter(contact => String(contact.email || '').trim()).length;
  const rows = state.contacts.map((contact, index) => {
    const initials = String(contact.name || 'EC').trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
    const cleanPhone = String(contact.phone || '').replace(/[^+\d]/g, '');
    return `
      <div class="table-row admin-filter-row admin-contact-row" data-admin-row data-department="${escapeReportText(String(contact.department || '').toLowerCase())}">
        <span data-label="Contact"><span class="admin-contact-identity"><span class="admin-contact-initials" aria-hidden="true">${escapeReportText(initials)}</span><strong>${escapeReportText(contact.name || 'Unnamed contact')}</strong></span></span>
        <span data-label="Agency"><span class="admin-contact-department">${escapeReportText(contact.department || 'Emergency services')}</span></span>
        <span data-label="Phone">${contact.phone ? `<a class="admin-contact-link" href="tel:${cleanPhone}">${escapeReportText(contact.phone)}</a>` : '<span class="admin-contact-missing">Not listed</span>'}</span>
        <span data-label="Email">${contact.email ? `<a class="admin-contact-link" href="mailto:${escapeReportText(contact.email)}">${escapeReportText(contact.email)}</a>` : '<span class="admin-contact-missing">Not listed</span>'}</span>
        <span data-label="Facebook">${contact.facebook ? `<a class="admin-contact-link" href="${normalizeFacebookUrl(contact.facebook)}" target="_blank" rel="noopener noreferrer">${escapeReportText(contact.facebook)}</a>` : '<span class="admin-contact-missing">Not listed</span>'}</span>
        <span data-label="Actions"><span class="admin-contact-actions"><button type="button" class="secondary-btn" data-action="edit" data-index="${index}">Edit</button><button type="button" class="user-delete-btn" data-action="delete" data-index="${index}">Delete</button></span></span>
      </div>
    `;
  });
  elements.contactManagementList.innerHTML = `
    <header class="admin-contact-header">
      <div>
        <span>ADMINISTRATOR / CONTACT DIRECTORY</span>
        <h2>Emergency contacts</h2>
        <p>Keep agency contact details accurate and ready for response coordination.</p>
      </div>
      <button type="button" class="primary-btn admin-contact-add-btn">Add contact</button>
    </header>
    <form class="admin-contact-form hidden" id="adminContactForm">
      <div class="admin-contact-form-heading"><div><span>DIRECTORY ENTRY</span><h3 id="adminContactFormTitle">Add contact</h3></div><button type="button" class="admin-contact-form-cancel" aria-label="Close contact form">×</button></div>
      <div class="admin-contact-form-grid">
        <label>Contact name<input name="contactName" type="text" autocomplete="name" required /></label>
        <label>Agency or department<input name="contactDepartment" type="text" placeholder="Police, Hospital, Fire" required /></label>
        <label>Phone number<input name="contactPhone" type="tel" autocomplete="tel" /></label>
        <label>Email address<input name="contactEmail" type="email" autocomplete="email" /></label>
        <label>Facebook page or profile<input name="contactFacebook" type="text" placeholder="facebook.com/agency" /></label>
      </div>
      <div class="admin-contact-form-footer"><p class="admin-contact-form-message" aria-live="polite"></p><button type="submit" class="primary-btn">Add contact</button></div>
    </form>
    <div class="admin-contact-summary" aria-label="Emergency contact directory summary">
      <article><span>Contacts</span><strong>${state.contacts.length}</strong><small>Listed in directory</small></article>
      <article class="is-agencies"><span>Agencies</span><strong>${departments.length}</strong><small>Departments represented</small></article>
      <article class="is-phone"><span>Phone lines</span><strong>${phoneCount}</strong><small>Direct call details</small></article>
      <article class="is-email"><span>Email addresses</span><strong>${emailCount}</strong><small>Written contact options</small></article>
    </div>
    ${renderAdminListToolbar('Search contacts', 'Name, agency, phone, or email', [
      { label: 'Agency', field: 'department', options: departments.map(department => ({ value: department.toLowerCase(), label: department })) }
    ])}
    <div class="table wide">
      <div class="table-header"><span>Contact</span><span>Agency</span><span>Phone</span><span>Email</span><span>Facebook</span><span>Actions</span></div>
      ${rows.join('')}
    </div>
  `;
  attachAdminListFilters(elements.contactManagementList, 'No emergency contacts have been configured.');

  const contactForm = elements.contactManagementList.querySelector('#adminContactForm');
  elements.contactManagementList.querySelector('.admin-contact-add-btn').addEventListener('click', () => {
    const shouldOpen = contactForm.classList.contains('hidden');
    contactForm.reset();
    delete contactForm.dataset.editIndex;
    contactForm.querySelector('#adminContactFormTitle').textContent = 'Add contact';
    contactForm.querySelector('[type="submit"]').textContent = 'Add contact';
    contactForm.querySelector('.admin-contact-form-message').textContent = '';
    contactForm.classList.toggle('hidden', !shouldOpen);
    if (shouldOpen) contactForm.elements.contactName.focus();
  });
  contactForm.querySelector('.admin-contact-form-cancel').addEventListener('click', () => {
    contactForm.classList.add('hidden');
    contactForm.reset();
    delete contactForm.dataset.editIndex;
  });
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const contact = {
      name: contactForm.elements.contactName.value.trim(),
      department: contactForm.elements.contactDepartment.value.trim(),
      phone: contactForm.elements.contactPhone.value.trim(),
      email: contactForm.elements.contactEmail.value.trim(),
      facebook: contactForm.elements.contactFacebook.value.trim()
    };
    const previousContacts = [...state.contacts];
    const editIndex = Number(contactForm.dataset.editIndex);
    const isEditing = Number.isInteger(editIndex) && editIndex >= 0 && editIndex < state.contacts.length;
    if (isEditing) state.contacts[editIndex] = { ...state.contacts[editIndex], ...contact };
    else state.contacts.unshift(contact);

    if (!saveToLocalStorage()) {
      state.contacts = previousContacts;
      contactForm.querySelector('.admin-contact-form-message').textContent = 'Could not save this contact. Please try again.';
      return;
    }
    state.auditLogs.unshift({ description: `Admin ${isEditing ? 'updated' : 'added'} emergency contact ${contact.name}.`, time: 'Just now' });
    renderSectionData();
  });

  elements.contactManagementList.querySelectorAll('button[data-action]').forEach(button => {
    const action = button.dataset.action;
    const index = Number(button.dataset.index);
    button.addEventListener('click', () => {
      if (action === 'edit') {
        editContact(index);
      } else if (action === 'delete') {
        deleteContact(index);
      }
    });
  });
}

function renderContentManagement() {
  if (!elements.contentManagementList) return;
  elements.contentManagementList.innerHTML = `
    ${renderAdminListToolbar('Search content', 'Title or message')}
    <div class="admin-content-list">
      ${state.contentItems.map((item, index) => `
        <article class="info-item admin-content-item admin-filter-row" data-admin-row>
          <div><h4>${escapeReportText(item.title)}</h4><small>${escapeReportText(item.text)}</small></div>
          <button type="button" class="secondary-btn content-delete-btn" data-index="${index}">Remove</button>
        </article>
      `).join('')}
    </div>
  `;
  attachAdminListFilters(elements.contentManagementList, 'No content has been published.');
  elements.contentManagementList.querySelectorAll('.content-delete-btn').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      if (!state.contentItems[index] || !confirm(`Remove "${state.contentItems[index].title}" from content management?`)) return;
      const [removed] = state.contentItems.splice(index, 1);
      if (!saveToLocalStorage()) {
        state.contentItems.splice(index, 0, removed);
        return;
      }
      state.auditLogs.unshift({ description: `Admin removed content: ${removed.title}.`, time: 'Just now' });
      renderSectionData();
    });
  });
}

function renderAuditLogs() {
  if (!elements.auditLogList) return;
  const count = document.getElementById('settingsAuditCount');
  if (count) count.textContent = state.auditLogs.length;
  elements.auditLogList.innerHTML = `
    ${renderAdminListToolbar('Search activity', 'Action or timestamp')}
    <div class="admin-audit-list">
      ${state.auditLogs.map(log => `
        <article class="info-item admin-audit-item admin-filter-row" data-admin-row><span class="admin-audit-marker"></span><div><h4>${escapeReportText(log.description)}</h4><small>${escapeReportText(log.time)}</small></div></article>
      `).join('')}
    </div>
  `;
  attachAdminListFilters(elements.auditLogList, 'No audit activity has been recorded.');
}

function renderSystemSettings() {
  const storageStatus = document.getElementById('settingsStorageStatus');
  if (!storageStatus) return;
  let savedAt = 0;
  let storageAvailable = false;
  try {
    savedAt = Number(localStorage.getItem('sindangan_state_lastUpdate')) || 0;
    storageAvailable = true;
  } catch (error) {
    storageAvailable = false;
  }

  storageStatus.textContent = storageAvailable ? 'Available' : 'Unavailable';
  document.getElementById('settingsRoleCount').textContent = `${new Set(state.authUsers.map(account => account.role)).size} configured`;
  document.getElementById('settingsContactCount').textContent = `${state.contacts.length} records`;
  document.getElementById('settingsReportCount').textContent = `${state.reports.length} records`;
  document.getElementById('settingsAuditCount').textContent = state.auditLogs.length;
  document.getElementById('settingsLastSaved').textContent = savedAt
    ? `Last saved ${new Date(savedAt).toLocaleString()}`
    : 'No saved changes recorded yet';
}

function renderAnalytics() {
  const total = state.reports.length;
  const openReports = state.reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const resolvedReports = total - openReports.length;
  const highPriorityReports = state.reports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase())).length;

  elements.analyticsIncidents.textContent = total;
  elements.analyticsResponse.textContent = openReports.length;
  elements.analyticsMonthly.textContent = resolvedReports;
  document.getElementById('analyticsHighPriority').textContent = highPriorityReports;
  document.getElementById('analyticsGeneratedAt').textContent = `Updated ${new Date().toLocaleString()}`;

  const typeCounts = new Map();
  state.reports.forEach(report => {
    const type = String(report.type || 'Uncategorized');
    typeCounts.set(type, (typeCounts.get(type) || 0) + 1);
  });
  const renderBars = (entries, emptyMessage) => entries.length ? entries.map(([label, count, color]) => `
    <div class="analytics-bar-row">
      <div><span>${escapeReportText(label)}</span><strong>${count}</strong></div>
      <div class="analytics-bar-track"><span style="width:${total ? Math.max((count / total) * 100, 3) : 0}%;--bar-color:${color}"></span></div>
    </div>
  `).join('') : `<p class="analytics-empty">${emptyMessage}</p>`;

  document.getElementById('analyticsTypeBreakdown').innerHTML = renderBars(
    [...typeCounts.entries()].sort((left, right) => right[1] - left[1]).map(([type, count]) => [type, count, '#0f766e']),
    'No incident types to report yet.'
  );
  const statuses = [
    ['Pending', state.reports.filter(report => String(report.status || '').toLowerCase() === 'pending').length, '#d97706'],
    ['Responding', state.reports.filter(report => String(report.status || '').toLowerCase() === 'responding').length, '#1d4ed8'],
    ['Resolved', resolvedReports, '#15803d']
  ];
  document.getElementById('analyticsStatusBreakdown').innerHTML = renderBars(statuses, 'No status data to report yet.');
}

function escapePdfText(text) {
  return String(text ?? '')
    .replace(/\r\n|\r|\n/g, ' ')
    .replace(/[^\x20-\x7E]/g, '?')
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

function wrapPdfLine(text, maxLength = 84) {
  const words = String(text ?? '').replace(/[^\x20-\x7E]/g, '?').split(/\s+/).filter(Boolean);
  const wrapped = [];
  let current = '';
  words.forEach(word => {
    if (word.length > maxLength) {
      if (current) wrapped.push(current);
      current = '';
      for (let offset = 0; offset < word.length; offset += maxLength) wrapped.push(word.slice(offset, offset + maxLength));
    } else if (!current) {
      current = word;
    } else if (`${current} ${word}`.length <= maxLength) {
      current += ` ${word}`;
    } else {
      wrapped.push(current);
      current = word;
    }
  });
  if (current) wrapped.push(current);
  return wrapped.length ? wrapped : [''];
}

function buildPaginatedPdfBlob(title, lines) {
  const wrappedLines = [title, ...lines].flatMap(line => wrapPdfLine(line));
  const linesPerPage = 48;
  const pages = [];
  for (let offset = 0; offset < wrappedLines.length; offset += linesPerPage) {
    pages.push(wrappedLines.slice(offset, offset + linesPerPage));
  }
  const encoder = new TextEncoder();
  const pageObjectIds = pages.map((_, index) => 4 + index * 2);
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    `<< /Type /Pages /Kids [${pageObjectIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
  ];

  pages.forEach((pageLines, index) => {
    const pageObjectId = pageObjectIds[index];
    const contentObjectId = pageObjectId + 1;
    const contentStream = [
      'BT /F1 10 Tf 48 748 Td 14 TL',
      ...pageLines.map(line => `(${escapePdfText(line)}) Tj T*`),
      'ET',
      `BT /F1 8 Tf 48 32 Td (Page ${index + 1} of ${pages.length}) Tj ET`
    ].join('\n');
    const streamWithEnding = `${contentStream}\n`;
    const streamLength = encoder.encode(streamWithEnding).length;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentObjectId} 0 R >>`);
    objects.push(`<< /Length ${streamLength} >>\nstream\n${streamWithEnding}endstream`);
  });

  const chunks = [encoder.encode('%PDF-1.4\n')];
  const objectOffsets = [0];
  let byteOffset = chunks[0].length;
  objects.forEach((body, index) => {
    objectOffsets.push(byteOffset);
    const objectChunk = encoder.encode(`${index + 1} 0 obj\n${body}\nendobj\n`);
    chunks.push(objectChunk);
    byteOffset += objectChunk.length;
  });

  const xrefOffset = byteOffset;
  const xref = [
    `xref\n0 ${objects.length + 1}\n`,
    '0000000000 65535 f \n',
    ...objectOffsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`),
    `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
  ].join('');
  chunks.push(encoder.encode(xref));
  const pdfBytes = new Uint8Array(chunks.reduce((size, chunk) => size + chunk.length, 0));
  let writeOffset = 0;
  chunks.forEach(chunk => {
    pdfBytes.set(chunk, writeOffset);
    writeOffset += chunk.length;
  });
  return new Blob([pdfBytes], { type: 'application/pdf' });
}

function buildSimplePdfBlob(reports) {
  const openReports = reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved');
  const resolvedReports = reports.length - openReports.length;
  const highPriority = reports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase())).length;
  const lines = [
    `Generated: ${new Date().toLocaleString()}`,
    `Total reports: ${reports.length}`,
    `Open: ${openReports.length} | Resolved: ${resolvedReports}`,
    `High priority: ${highPriority}`,
    ''
  ];

  if (!reports.length) lines.push('No incident reports are available.');
  reports.forEach((report, index) => {
    lines.push(`REPORT ${index + 1} | ID: ${report.id || 'N/A'}`);
    [
      ['Type', report.type],
      ['Priority', report.priority || 'Unassigned'],
      ['Title', report.title || report.type],
      ['Location', report.location || 'Not provided'],
      ['Status', report.status || 'Pending'],
      ['Submitted', report.submitted || 'Unknown'],
      ['Reported by', report.submittedBy || 'Unknown'],
      ['Phone', report.contactNumber || 'Not provided'],
      ['Email', report.submitterEmail || 'Not provided'],
      ['Description', report.description || 'Not provided'],
      ['Response notes', report.responseNotes || 'None']
    ].forEach(([label, value]) => lines.push(`${label}: ${value || 'Not provided'}`));
    lines.push('');
  });
  return buildPaginatedPdfBlob('SINDANGAN SENTINEL - INCIDENT REPORTS', lines);
}

function buildAnalyticsSummaryPdfBlob() {
  const total = state.reports.length;
  const open = state.reports.filter(report => String(report.status || '').toLowerCase() !== 'resolved').length;
  const resolved = total - open;
  const highPriority = state.reports.filter(report => ['urgent', 'high'].includes(String(report.priority || '').toLowerCase())).length;
  const typeCounts = new Map();
  state.reports.forEach(report => {
    const type = String(report.type || 'Uncategorized');
    typeCounts.set(type, (typeCounts.get(type) || 0) + 1);
  });
  const lines = [
    `Generated: ${new Date().toLocaleString()}`,
    `Total incidents: ${total}`,
    `Open incidents: ${open}`,
    `Resolved incidents: ${resolved}`,
    `High-priority incidents: ${highPriority}`,
    '',
    'REPORTS BY TYPE',
    ...(typeCounts.size ? [...typeCounts.entries()].map(([type, count]) => `${type}: ${count}`) : ['No incident reports are available.']),
    '',
    'STATUS BREAKDOWN',
    `Pending: ${state.reports.filter(report => String(report.status || '').toLowerCase() === 'pending').length}`,
    `Responding: ${state.reports.filter(report => String(report.status || '').toLowerCase() === 'responding').length}`,
    `Resolved: ${resolved}`
  ];
  return buildPaginatedPdfBlob('SINDANGAN SENTINEL - REPORTS & ANALYTICS SUMMARY', lines);
}

// Normalize facebook input to a usable URL
function normalizeFacebookUrl(raw) {
  if (!raw) return '';
  let val = String(raw).trim();
  if (!val) return '';
  // If already has scheme, return as-is
  if (/^https?:\/\//i.test(val)) return val;
  if (/^\/\//.test(val)) return 'https:' + val;
  // Strip leading www. or protocol
  val = val.replace(/^https?:\/\/(www\.)?/i, '').replace(/^www\./i, '');
  // If it already contains facebook.com, prefix https://
  if (/facebook\.com/i.test(val)) return 'https://' + val;
  // Otherwise assume it's a username or id
  return 'https://facebook.com/' + encodeURIComponent(val.replace(/^\/+/, ''));
}

function createCsvFromReports(reports) {
  function escapeCsv(value) {
    const text = String(value || '');
    if (/[",\n]/.test(text)) {
      return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
  }

  const headers = ['Report ID', 'Type', 'Title', 'Location', 'Status', 'Submitted', 'Submitted By', 'Email', 'Response Notes'];
  const rows = reports.map(report => [
    report.id,
    report.type,
    report.title,
    report.location,
    report.status,
    report.submitted,
    report.submittedBy,
    report.submitterEmail,
    report.responseNotes || ''
  ].map(escapeCsv).join(','));

  return [headers.join(','), ...rows].join('\r\n');
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function handleDownloadPdf() {
  const reports = state.reports.slice();
  const pdfBlob = buildSimplePdfBlob(reports);
  downloadBlob(pdfBlob, `sindangan_incident_reports_${new Date().toISOString().slice(0, 10)}.pdf`);
  document.getElementById('reportExportStatus').textContent = `PDF prepared with ${reports.length} ${reports.length === 1 ? 'incident' : 'incidents'}.`;
}

function handleDownloadExcel() {
  const csv = createCsvFromReports(state.reports);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  downloadBlob(blob, `sindangan_incident_reports_${new Date().toISOString().slice(0, 10)}.csv`);
  document.getElementById('reportExportStatus').textContent = `CSV prepared with ${state.reports.length} ${state.reports.length === 1 ? 'incident' : 'incidents'}.`;
}

function handlePrintReports() {
  let beforePrintFired = false;
  let afterPrintFired = false;
  let fallbackStarted = false;
  const cleanup = () => {
    document.body.classList.remove('printing-analytics');
    window.removeEventListener('beforeprint', onBeforePrint);
    window.removeEventListener('afterprint', onAfterPrint);
  };
  const fallbackToPdf = () => {
    if (fallbackStarted) return;
    fallbackStarted = true;
    cleanup();
    downloadBlob(buildAnalyticsSummaryPdfBlob(), `sindangan_analytics_summary_${new Date().toISOString().slice(0, 10)}.pdf`);
    document.getElementById('reportExportStatus').textContent = 'This browser did not open a print dialog, so a printable summary PDF was downloaded instead.';
  };
  const onBeforePrint = () => { beforePrintFired = true; };
  const onAfterPrint = () => {
    afterPrintFired = true;
    cleanup();
    if (!beforePrintFired) fallbackToPdf();
  };

  document.body.classList.add('printing-analytics');
  window.addEventListener('beforeprint', onBeforePrint);
  window.addEventListener('afterprint', onAfterPrint);
  try {
    window.print();
  } catch (error) {
    fallbackToPdf();
    return;
  }
  if (!beforePrintFired && !afterPrintFired) {
    setTimeout(() => {
      if (!beforePrintFired && !afterPrintFired) fallbackToPdf();
    }, 500);
  }
}

function showLoginScreen() {
  elements.appShell.classList.add('hidden');
  elements.loginScreen.classList.remove('hidden');
  elements.loginMessage.textContent = '';
}

function showAppShell() {
  elements.loginScreen.classList.add('hidden');
  elements.appShell.classList.remove('hidden');
}

const activeSessionStorageKey = 'sindangan_active_session';

function saveActiveSession() {
  if (!state.authenticated || !state.userProfile.email) return;
  try {
    sessionStorage.setItem(activeSessionStorageKey, JSON.stringify({
      email: state.userProfile.email,
      role: state.userProfile.role,
      mode: state.mode,
      currentSection: state.currentSection
    }));
  } catch (error) {
    console.warn('Could not save the current session.', error);
  }
}

function restoreActiveSession() {
  let session;
  try {
    session = JSON.parse(sessionStorage.getItem(activeSessionStorageKey) || 'null');
  } catch (error) {
    session = null;
  }
  if (!session || !session.email || !session.role) return false;

  const normalizedEmail = String(session.email).trim().toLowerCase();
  const account = state.authUsers.find(item =>
    String(item.email || '').trim().toLowerCase() === normalizedEmail && item.role === session.role
  );
  if (!account) {
    try {
      sessionStorage.removeItem(activeSessionStorageKey);
    } catch (error) {
      console.warn('Could not clear an expired session.', error);
    }
    return false;
  }

  const savedProfile = state.users.find(item =>
    String(item.email || '').trim().toLowerCase() === normalizedEmail
  );
  state.authenticated = true;
  state.userProfile = {
    name: savedProfile?.name || account.name || '',
    email: account.email,
    phone: savedProfile?.phone || account.phone || '',
    emergencyContact: savedProfile?.emergencyContact || account.emergencyContact || '',
    role: account.role
  };

  const isAdmin = isAdminRole(account.role);
  const isDepartment = isDepartmentRole(account.role);
  state.mode = isAdmin && ['admin', 'user'].includes(session.mode) ? session.mode : isAdmin ? 'admin' : isDepartment ? 'department' : 'user';
  setColorTheme(getColorTheme(account.role));
  const savedSection = document.getElementById(session.currentSection);
  state.currentSection = canAccessSectionForRole(savedSection, account.role) ? session.currentSection : 'dashboard';

  elements.userModeBtn.classList.toggle('hidden', isDepartment);
  elements.adminModeBtn.classList.toggle('hidden', isDepartment || !isAdmin);
  elements.userModeBtn.classList.toggle('active', !isDepartment && state.mode === 'user');
  elements.adminModeBtn.classList.toggle('active', isAdmin && state.mode === 'admin');
  if (elements.currentRole) elements.currentRole.textContent = getRoleDisplayName(account.role);
  return true;
}

function updateTopbarProfile() {
  const profileName = document.getElementById('topbarProfileName');
  const profileRole = document.getElementById('profileRole');
  const profileAvatar = document.getElementById('profileAvatar');

  if (!profileName || !profileRole || !profileAvatar) return;

  if (!state.authenticated || !state.userProfile || !state.userProfile.name) {
    profileName.textContent = 'Guest User';
    profileRole.textContent = 'Sign in to continue';
    profileAvatar.textContent = 'GU';
    return;
  }

  const name = state.userProfile.name || 'User';
  const role = state.userProfile.role || 'user';
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'U';

  profileName.textContent = name;
  profileAvatar.textContent = initials;

  if (role === 'admin') {
    profileRole.textContent = 'System administrator';
  } else if (isDepartmentRole(role)) {
    profileRole.textContent = `${getRoleDisplayName(role)} operations`;
  } else {
    profileRole.textContent = 'Citizen user';
  }
}

function setAccountLoginStatus(email, status) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  if (!normalizedEmail) return false;

  const account = state.authUsers.find(item => String(item.email || '').trim().toLowerCase() === normalizedEmail);
  if (!account) return false;

  let profile = state.users.find(item => String(item.email || '').trim().toLowerCase() === normalizedEmail);
  let createdProfile = false;
  if (!profile) {
    profile = {
      name: account.name || 'User',
      email: account.email,
      role: getRoleDisplayName(account.role),
      status
    };
    state.users.push(profile);
    createdProfile = true;
  }

  const previousStatus = profile.status;
  profile.status = status;
  if (saveToLocalStorage()) return true;

  if (createdProfile) state.users = state.users.filter(item => item !== profile);
  else if (previousStatus === undefined) delete profile.status;
  else profile.status = previousStatus;
  return false;
}

function handleLogout() {
  setAccountLoginStatus(state.userProfile.email, 'Inactive');
  try {
    sessionStorage.removeItem(activeSessionStorageKey);
  } catch (error) {
    console.warn('Could not clear the current session.', error);
  }
  state.authenticated = false;
  state.currentSection = 'dashboard';
  state.mode = 'user';
  state.userProfile = {
    name: '',
    email: '',
    phone: '',
    emergencyContact: '',
    role: 'user'
  };
  setColorTheme(getColorTheme('user'));
  elements.userModeBtn.classList.remove('hidden');
  elements.adminModeBtn.classList.remove('hidden');
  updateTopbarProfile();
  showLoginScreen();
}

function handleLogin(role, email, password) {
  console.log('Attempting login', { role, email });
  const user = state.authUsers.find(item => item.email === email && item.password === password && item.role === role);
  if (!user) {
    elements.loginMessage.textContent = 'Invalid credentials. Please try again.';
    console.warn('Login failed for', email);
    return false;
  }
  state.authenticated = true;
  state.userProfile.name = user.name;
  state.userProfile.email = user.email;
  state.userProfile.role = user.role;
  state.userProfile.phone = user.phone || '';
  state.userProfile.emergencyContact = user.emergencyContact || '';
  setColorTheme(getColorTheme(user.role));

  const savedProfile = state.users.find(item => item.email === user.email);
  if (savedProfile) {
    state.userProfile.name = savedProfile.name || user.name;
    state.userProfile.phone = savedProfile.phone || user.phone || '';
    state.userProfile.emergencyContact = savedProfile.emergencyContact || user.emergencyContact || '';
  }
  setAccountLoginStatus(user.email, 'Active');

  if (isAdminRole(user.role)) {
    state.mode = 'admin';
    state.currentSection = 'dashboard';
    elements.userModeBtn.classList.add('hidden');
    elements.adminModeBtn.classList.remove('hidden');
    elements.adminModeBtn.classList.add('active');
    elements.userModeBtn.classList.remove('active');
  } else if (isDepartmentRole(user.role)) {
    state.mode = 'department';
    state.currentSection = 'dashboard';
    elements.userModeBtn.classList.add('hidden');
    elements.adminModeBtn.classList.add('hidden');
  } else {
    state.mode = 'user';
    state.currentSection = 'dashboard';
    elements.adminModeBtn.classList.add('hidden');
    elements.userModeBtn.classList.remove('hidden');
    elements.userModeBtn.classList.add('active');
    elements.adminModeBtn.classList.remove('active');
  }
  renderSidebar();
  renderSectionData();
  showAppShell();
  if (elements.currentRole) elements.currentRole.textContent = getRoleDisplayName(user.role);
  updateTopbarProfile();
  showSection(state.currentSection);
  return true;
}

function handleRegister(name, email, phone, password, confirmPassword) {
  console.log('Attempting register', { name, email });
  if (password !== confirmPassword) {
    elements.registerMessage.textContent = 'Passwords do not match.';
    console.warn('Registration failed - passwords do not match', { email });
    return false;
  }
  if (state.authUsers.some(item => item.email === email)) {
    elements.registerMessage.textContent = 'An account with this email already exists.';
    console.warn('Registration failed - email exists', { email });
    return false;
  }
  const newUser = {
    name,
    email,
    phone: phone || '',
    emergencyContact: '',
    password,
    role: 'user'
  };
  const newAppUser = {
    name,
    email,
    phone: phone || '',
    emergencyContact: '',
    role: 'User',
    status: 'Inactive'
  };
  state.authUsers.push(newUser);
  state.users.push(newAppUser);
  syncSystem.notify('user_registered', newAppUser);
  elements.registerMessage.textContent = 'Registration successful. Please log in.';
  saveToLocalStorage();
  return true;
}

function showLoginForm() {
  elements.loginForm.classList.remove('hidden');
  elements.registerForm.classList.add('hidden');
  elements.showLoginBtn.classList.add('active');
  elements.showRegisterBtn.classList.remove('active');
  elements.loginMessage.textContent = '';
  elements.registerMessage.textContent = '';
}

function showRegisterForm() {
  elements.loginForm.classList.add('hidden');
  elements.registerForm.classList.remove('hidden');
  elements.showLoginBtn.classList.remove('active');
  elements.showRegisterBtn.classList.add('active');
  elements.loginMessage.textContent = '';
  elements.registerMessage.textContent = '';
}

function applyLoginBackground() {
  if (!elements.loginScreen) return;
  if (state.loginBackgroundImage) {
    elements.loginScreen.style.backgroundImage = `linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.7)), url('${state.loginBackgroundImage}')`;
  } else {
    elements.loginScreen.style.backgroundImage = 'linear-gradient(180deg, rgba(15,23,42,0.7), rgba(15,23,42,0.7))';
  }
}

function applyLogoImage() {
  if (elements.brandLogoImg) {
    elements.brandLogoImg.src = state.logoImage || '';
  }
  if (elements.brandLogoImgSidebar) {
    elements.brandLogoImgSidebar.src = state.logoImage || '';
  }
}

function speakNotification(message) {
  if (!window.speechSynthesis || !message || !String(message).trim()) return;
  const utterance = new SpeechSynthesisUtterance(String(message).trim());
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function readLatestNotification() {
  const notifications = getVisibleNotifications();
  if (notifications.length === 0) {
    if (window.speechSynthesis) {
      speakNotification('There are no new updates right now.');
    }
    return;
  }

  const latest = getNotificationDisplay(notifications[0]);
  const text = latest.text ? `${latest.title || 'Incident update'}: ${latest.text}` : latest.title || 'Incident update';
  speakNotification(text);
}

function handleLoginBackgroundUpload(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert('Please choose a valid image file for the background.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const previousBackground = state.loginBackgroundImage;
    state.loginBackgroundImage = reader.result;
    applyLoginBackground();
    if (!saveToLocalStorage()) {
      state.loginBackgroundImage = previousBackground;
      applyLoginBackground();
      setSettingsActionStatus('Could not save the login background because browser storage failed.', true);
      return;
    }
    state.auditLogs.unshift({ description: 'Admin updated the login background.', time: 'Just now' });
    renderAuditLogs();
    renderSystemSettings();
    setSettingsActionStatus('Login background updated.');
  };
  reader.readAsDataURL(file);
}

function resetLoginBackground() {
  if (!confirm('Reset the custom login background and use the default appearance?')) return;
  const previousBackground = state.loginBackgroundImage;
  state.loginBackgroundImage = '';
  applyLoginBackground();
  if (!saveToLocalStorage()) {
    state.loginBackgroundImage = previousBackground;
    applyLoginBackground();
    setSettingsActionStatus('Could not reset the login background because browser storage failed.', true);
    return;
  }
  state.auditLogs.unshift({ description: 'Admin reset the login background.', time: 'Just now' });
  renderAuditLogs();
  renderSystemSettings();
  setSettingsActionStatus('Login background reset.');
}

function handleLogoUpload(file) {
  if (!file || !file.type.startsWith('image/')) {
    alert('Please choose a valid image file for the logo.');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const previousLogo = state.logoImage;
    state.logoImage = reader.result;
    applyLogoImage();
    if (!saveToLocalStorage()) {
      state.logoImage = previousLogo;
      applyLogoImage();
      setSettingsActionStatus('Could not save the application logo because browser storage failed.', true);
      return;
    }
    state.auditLogs.unshift({ description: 'Admin updated the application logo.', time: 'Just now' });
    renderAuditLogs();
    renderSystemSettings();
    setSettingsActionStatus('Application logo updated.');
  };
  reader.readAsDataURL(file);
}

function resetLogoImage() {
  if (!confirm('Reset the custom application logo and use the default appearance?')) return;
  const previousLogo = state.logoImage;
  state.logoImage = '';
  applyLogoImage();
  if (!saveToLocalStorage()) {
    state.logoImage = previousLogo;
    applyLogoImage();
    setSettingsActionStatus('Could not reset the application logo because browser storage failed.', true);
    return;
  }
  state.auditLogs.unshift({ description: 'Admin reset the application logo.', time: 'Just now' });
  renderAuditLogs();
  renderSystemSettings();
  setSettingsActionStatus('Application logo reset.');
}

function setBackupStatus(message, isError = false) {
  const status = document.getElementById('backupStatus');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', isError);
}

function setSettingsActionStatus(message, isError = false) {
  const status = document.getElementById('settingsActionStatus');
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', isError);
}

function exportSystemBackup() {
  if (!saveToLocalStorage()) {
    setBackupStatus('Could not prepare a backup from browser storage.', true);
    return;
  }

  try {
    const savedState = JSON.parse(localStorage.getItem('sindangan_state') || '{}');
    const backup = {
      format: 'sindangan-sentinel-backup',
      version: 1,
      exportedAt: new Date().toISOString(),
      state: savedState
    };
    downloadBlob(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }), `sindangan-backup-${new Date().toISOString().slice(0, 10)}.json`);
    setBackupStatus('Backup exported successfully. Keep the file in a secure location.');
    renderSystemSettings();
  } catch (error) {
    setBackupStatus('Could not create the backup file.', true);
  }
}

async function importSystemBackup(file) {
  if (!file) return;
  setBackupStatus('');

  try {
    const backup = JSON.parse(await file.text());
    const requiredCollections = ['authUsers', 'reports', 'alerts', 'users', 'contacts', 'evacCenters', 'responders', 'contentItems'];
    const isValid = backup && backup.format === 'sindangan-sentinel-backup' && backup.version === 1 && backup.state &&
      requiredCollections.every(key => Array.isArray(backup.state[key]));
    if (!isValid) {
      setBackupStatus('This file is not a valid Sindangan Sentinel backup.', true);
      return;
    }
    if (!confirm('Restoring replaces the current accounts, reports, contacts, alerts, and settings. The backup may contain readable account passwords. Continue only with a trusted file.')) {
      setBackupStatus('Restore cancelled. Current data was not changed.');
      return;
    }

    localStorage.setItem('sindangan_state', JSON.stringify(backup.state));
    localStorage.setItem('sindangan_state_lastUpdate', String(Date.now()));
    setBackupStatus('Backup restored. Reloading the system...');
    location.reload();
  } catch (error) {
    setBackupStatus('Could not read this backup file. Current data was not changed.', true);
  }
}

function setMode(mode) {
  if (!state.authenticated) return;
  if (isDepartmentRole(state.userProfile.role)) {
    alert('Department accounts use their dedicated operations dashboard and are synced with the shared report feed.');
    return;
  }
  if (!isAdminRole(state.userProfile.role) && mode === 'admin') {
    alert('Only the ADMIN account can access administrative mode.');
    return;
  }
  if (state.userProfile.role === 'admin' && !['admin', 'user'].includes(mode)) {
    return;
  }
  state.mode = mode;
  elements.userModeBtn.classList.toggle('active', mode === 'user');
  elements.adminModeBtn.classList.toggle('active', mode === 'admin');
  elements.currentRole.textContent = getRoleDisplayName(state.userProfile.role);
  state.currentSection = 'dashboard';
  renderSidebar();
  showSection('dashboard');
}

function bindPasswordToggleButtons() {
  document.querySelectorAll('.password-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      const targetInput = document.getElementById(targetId);
      if (!targetInput) return;

      const shouldShow = targetInput.type === 'password';
      targetInput.type = shouldShow ? 'text' : 'password';
      button.setAttribute('aria-label', shouldShow ? 'Hide password' : 'Show password');
      button.querySelector('.password-toggle-icon').textContent = shouldShow ? '🙈' : '👁';
    });
  });
}

function init() {
  // Load persisted state (users, reports, alerts)
  loadFromLocalStorage();
  initializeColorTheme();
  applyLoginBackground();
  applyLogoImage();
  bindPasswordToggleButtons();

  // Auto-sync dashboard every 3 seconds while viewing
  setInterval(() => {
    if (state.authenticated && state.currentSection === 'dashboard') {
      renderDashboard();
    }
  }, 3000);

  elements.userModeBtn.addEventListener('click', () => setMode('user'));
  elements.adminModeBtn.addEventListener('click', () => setMode('admin'));
  elements.logoutBtn.addEventListener('click', handleLogout);

  const topbarSearchInput = document.querySelector('.topbar-search input');
  const liveToggle = document.querySelector('.live-toggle');
  const notificationBtn = document.querySelector('.notification-btn');
  const profilePill = document.querySelector('.profile-pill');
  const profileMenu = document.getElementById('profileMenu');

  if (topbarSearchInput) {
    topbarSearchInput.addEventListener('input', (event) => {
      const term = event.target.value.trim().toLowerCase();
      const searchable = document.querySelectorAll('.list-item, .alert-item, .contact-card, .card, .agency-stat');
      searchable.forEach(item => {
        const text = (item.textContent || '').toLowerCase();
        item.style.display = term && !text.includes(term) ? 'none' : '';
      });
    });
  }

  if (liveToggle) {
    liveToggle.addEventListener('click', () => {
      liveToggle.classList.toggle('is-offline');
      const label = liveToggle.querySelector('.live-label');
      if (label) label.textContent = liveToggle.classList.contains('is-offline') ? 'OFFLINE' : 'LIVE';
    });
  }

  if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
      if (state.authenticated) {
        readLatestNotification();
      }
    });
  }

  if (profilePill && profileMenu) {
    profilePill.addEventListener('click', () => {
      profileMenu.classList.toggle('hidden');
    });

    profileMenu.addEventListener('click', (event) => {
      const action = event.target.dataset.action;
      if (action === 'profile') {
        profileMenu.classList.add('hidden');
        showSection('profile');
      }
      if (action === 'logout') {
        profileMenu.classList.add('hidden');
        handleLogout();
      }
    });

    document.addEventListener('click', (event) => {
      if (!profilePill.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.add('hidden');
      }
    });
  }

  elements.showLoginBtn.addEventListener('click', showLoginForm);
  elements.showRegisterBtn.addEventListener('click', showRegisterForm);
  if (elements.uploadLoginBgBtn && elements.loginBgInput) {
    elements.uploadLoginBgBtn.addEventListener('click', () => elements.loginBgInput.click());
    elements.loginBgInput.addEventListener('change', event => {
      const file = event.target.files && event.target.files[0];
      if (file) handleLoginBackgroundUpload(file);
    });
  }
  if (elements.resetLoginBgBtn) {
    elements.resetLoginBgBtn.addEventListener('click', resetLoginBackground);
  }
  if (elements.uploadLogoBtn && elements.logoInput) {
    elements.uploadLogoBtn.addEventListener('click', () => elements.logoInput.click());
    elements.logoInput.addEventListener('change', event => {
      const file = event.target.files && event.target.files[0];
      if (file) handleLogoUpload(file);
    });
  }
  if (elements.resetLogoBtn) {
    elements.resetLogoBtn.addEventListener('click', resetLogoImage);
  }
  const exportBackupBtn = document.getElementById('exportBackupBtn');
  const importBackupBtn = document.getElementById('importBackupBtn');
  const backupImportInput = document.getElementById('backupImportInput');
  if (exportBackupBtn) exportBackupBtn.addEventListener('click', exportSystemBackup);
  if (importBackupBtn && backupImportInput) {
    importBackupBtn.addEventListener('click', () => backupImportInput.click());
    backupImportInput.addEventListener('change', event => {
      const file = event.target.files && event.target.files[0];
      if (file) importSystemBackup(file);
      event.target.value = '';
    });
  }
  elements.loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const role = elements.loginRole.value;
    const email = elements.loginEmail.value.trim();
    const password = elements.loginPassword.value;
    if (handleLogin(role, email, password)) {
      elements.loginForm.reset();
    }
  });
  elements.registerForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = elements.registerName.value.trim();
    const email = elements.registerEmail.value.trim();
    const phone = elements.registerPhone.value.trim();
    const password = elements.registerPassword.value;
    const confirmPassword = elements.registerConfirmPassword.value;
    if (handleRegister(name, email, phone, password, confirmPassword)) {
      elements.registerForm.reset();
      showLoginForm();
    }
  });
  const reportFiltersBtn = document.getElementById('reportFiltersBtn');
  const reportFilterPanel = document.getElementById('reportFilterPanel');
  const reportCategoryFilter = document.getElementById('reportCategoryFilter');
  const incidentTypeSelect = document.getElementById('incidentType');
  const reportCategories = document.querySelectorAll('.report-category');
  const reportDialog = document.getElementById('reportDialog');
  const reporterNameInput = document.getElementById('reporterName');
  const reporterContactInput = document.getElementById('reporterContact');
  const reportAttachmentsInput = document.getElementById('reportAttachments');
  const reportAttachmentStatus = document.getElementById('reportAttachmentStatus');
  let lastReportTrigger = null;

  const selectReportCategory = type => {
    if (!incidentTypeSelect || !type) return;
    incidentTypeSelect.value = type;
    reportCategories.forEach(category => {
      const isSelected = category.dataset.incidentType === type;
      category.classList.toggle('is-selected', isSelected);
      category.setAttribute('aria-pressed', String(isSelected));
    });
    if (reportCategoryFilter) reportCategoryFilter.value = type;
  };

  if (reportFiltersBtn && reportFilterPanel) {
    reportFiltersBtn.addEventListener('click', () => {
      const isOpening = reportFilterPanel.classList.contains('hidden');
      reportFilterPanel.classList.toggle('hidden', !isOpening);
      reportFiltersBtn.setAttribute('aria-expanded', String(isOpening));
    });
  }
  if (reportCategoryFilter) {
    reportCategoryFilter.addEventListener('change', () => selectReportCategory(reportCategoryFilter.value));
  }
  reportCategories.forEach(category => {
    category.addEventListener('click', () => selectReportCategory(category.dataset.incidentType));
  });
  document.querySelectorAll('[data-report-start]').forEach(button => {
    button.addEventListener('click', event => {
      lastReportTrigger = event.currentTarget;
      if (reporterNameInput) reporterNameInput.value = state.userProfile.name || '';
      if (reporterContactInput) reporterContactInput.value = state.userProfile.phone || '';
      reportDialog.classList.remove('hidden');
      document.body.classList.add('report-dialog-open');
      incidentTypeSelect.focus();
    });
  });
  document.querySelectorAll('[data-report-close]').forEach(button => {
    button.addEventListener('click', () => {
      reportDialog.classList.add('hidden');
      document.body.classList.remove('report-dialog-open');
      if (lastReportTrigger) lastReportTrigger.focus();
    });
  });
  reportDialog.addEventListener('click', event => {
    if (event.target === reportDialog) {
      reportDialog.classList.add('hidden');
      document.body.classList.remove('report-dialog-open');
      if (lastReportTrigger) lastReportTrigger.focus();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !reportDialog.classList.contains('hidden')) {
      reportDialog.classList.add('hidden');
      document.body.classList.remove('report-dialog-open');
      if (lastReportTrigger) lastReportTrigger.focus();
    }
  });
  if (reportAttachmentsInput) {
    reportAttachmentsInput.addEventListener('change', () => {
      const files = Array.from(reportAttachmentsInput.files || []);
      const totalSize = files.reduce((total, file) => total + file.size, 0);
      if (totalSize > 20 * 1024 * 1024) {
        alert('Selected files must total 20 MB or less.');
        reportAttachmentsInput.value = '';
        reportAttachmentStatus.textContent = '';
        return;
      }
      reportAttachmentStatus.textContent = files.map(file => file.name).join(', ');
    });
  }
  elements.reportForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!state.authenticated) {
      alert('You must be logged in to submit a report. Please log in or register.');
      showLoginForm();
      return;
    }

    if (elements.reportForm.dataset.submitting === 'true') return;
    elements.reportForm.dataset.submitting = 'true';
    const description = elements.incidentDescription.value.trim();
    const reporterName = reporterNameInput.value.trim();
    const selectedPhotos = Array.from(reportAttachmentsInput.files || []);
    const reportId = Date.now();
    let attachments;
    let originalImageIds = [];
    try {
      attachments = await Promise.all(selectedPhotos.map(optimizeReportPhoto));
      if (attachments.reduce((total, attachment) => total + attachment.dataUrl.length, 0) > 1200000) {
        throw new Error('Selected photos are too large to share together. Please choose fewer photos.');
      }
      originalImageIds = await saveOriginalReportImages(reportId, selectedPhotos);
      attachments = attachments.map((attachment, index) => ({
        ...attachment,
        originalImageId: originalImageIds[index]
      }));
    } catch (error) {
      alert(error.message || 'Could not process the selected photos.');
      delete elements.reportForm.dataset.submitting;
      return;
    }

    const newReport = {
      id: reportId,
      type: elements.incidentType.value,
      priority: document.getElementById('incidentPriority').value,
      title: description.split(/\s+/).slice(0, 8).join(' ').slice(0, 80),
      location: elements.incidentLocation.value,
      description: description || 'No description provided',
      status: 'Pending',
      submitted: 'Just now',
      submittedBy: reporterName || state.userProfile.name || 'Unknown User',
      submitterEmail: state.userProfile.email || 'N/A',
      contactNumber: reporterContactInput.value.trim(),
      attachments,
      attachmentNames: attachments.map(attachment => attachment.name),
      responseNotes: ''
    };

    state.reports.unshift(newReport);
    const reportNotification = addReportNotification(
      newReport,
      'citizen_report',
      `New citizen report: ${newReport.type}`,
      `${newReport.title} · ${newReport.location}`,
      'Your report was received',
      `Your ${newReport.type} report was submitted successfully.`
    );
    if (!saveToLocalStorage()) {
      state.reports.shift();
      state.notificationFeed.shift();
      try {
        await deleteOriginalReportImages(originalImageIds);
      } catch (error) {
        console.warn(error.message);
      }
      alert('The report could not be saved. Try submitting fewer or smaller photos.');
      delete elements.reportForm.dataset.submitting;
      return;
    }
    syncSystem.notify('report_submitted', newReport);
    syncSystem.notify('notification_added', reportNotification);
    speakNotification(`Your ${newReport.type} report has been submitted successfully.`);
    alert('Emergency report submitted successfully.');
    elements.reportForm.reset();
    reportAttachmentStatus.textContent = '';
    reportDialog.classList.add('hidden');
    document.body.classList.remove('report-dialog-open');
    if (lastReportTrigger) lastReportTrigger.focus();
    delete elements.reportForm.dataset.submitting;
    renderDashboard();
    renderSectionData();
  });
  elements.profileForm.addEventListener('input', updateProfileDirtyState);
  document.getElementById('profileDiscardBtn').addEventListener('click', () => {
    renderProfile();
    document.getElementById('profileSaveStatus').textContent = 'Changes discarded.';
  });
  elements.profileForm.querySelectorAll('[data-profile-password]').forEach(button => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.dataset.profilePassword);
      const shouldShow = input.type === 'password';
      input.type = shouldShow ? 'text' : 'password';
      button.textContent = shouldShow ? 'Hide' : 'Show';
      button.setAttribute('aria-label', `${shouldShow ? 'Hide' : 'Show'} ${button.dataset.profilePassword === 'profilePassword' ? 'new password' : 'password confirmation'}`);
    });
  });
  elements.profileForm.addEventListener('submit', event => {
    event.preventDefault();
    const previousProfile = { ...state.userProfile };
    const nextProfile = {
      name: elements.profileName.value.trim(),
      email: elements.profileEmail.value.trim(),
      phone: elements.profilePhone.value.trim(),
      emergencyContact: elements.profileEmergencyContact.value.trim(),
      role: previousProfile.role
    };
    const newPassword = elements.profilePassword.value;
    const confirmPassword = document.getElementById('profilePasswordConfirm').value;
    const status = document.getElementById('profileSaveStatus');
    const currentAccountIndex = state.authUsers.findIndex(user => user.email === previousProfile.email);
    const duplicateEmail = state.authUsers.some((user, index) =>
      index !== currentAccountIndex && String(user.email || '').trim().toLowerCase() === nextProfile.email.toLowerCase()
    );

    if (duplicateEmail) {
      status.textContent = 'That email address is already connected to another account.';
      elements.profileEmail.focus();
      return;
    }
    if (newPassword && newPassword.length < 8) {
      status.textContent = 'Your new password must be at least 8 characters.';
      elements.profilePassword.focus();
      return;
    }
    if (newPassword !== confirmPassword) {
      status.textContent = 'The new password fields do not match.';
      document.getElementById('profilePasswordConfirm').focus();
      return;
    }
    if (currentAccountIndex === -1) {
      status.textContent = 'Could not find the login account for this profile.';
      return;
    }

    const previousAuthUsers = state.authUsers.map(user => ({ ...user }));
    const previousUsers = state.users.map(user => ({ ...user }));
    const appUserIndex = state.users.findIndex(user => user.email === previousProfile.email);
    state.userProfile = nextProfile;
    state.authUsers[currentAccountIndex] = {
      ...state.authUsers[currentAccountIndex],
      ...nextProfile,
      ...(newPassword ? { password: newPassword } : {})
    };
    if (appUserIndex !== -1) state.users[appUserIndex] = { ...state.users[appUserIndex], ...nextProfile };

    if (!saveToLocalStorage()) {
      state.userProfile = previousProfile;
      state.authUsers = previousAuthUsers;
      state.users = previousUsers;
      renderProfile();
      status.textContent = 'Could not save your profile because browser storage failed.';
      return;
    }
    state.auditLogs.unshift({ description: `User updated account details${newPassword ? ' and password' : ''}.`, time: 'Just now' });
    elements.profilePassword.value = '';
    document.getElementById('profilePasswordConfirm').value = '';
    updateTopbarProfile();
    renderProfile();
    renderAuditLogs();
    status.textContent = 'Profile saved.';
  });

  // Keep the shared report stream synchronized for all non-citizen roles and admin.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      renderDashboard();
      renderSectionData();
    }
  });
  elements.alertForm.addEventListener('submit', event => {
    event.preventDefault();
    const newAlert = {
      type: elements.alertType.value,
      message: elements.alertMessage.value,
      severity: elements.alertSeverity.value,
      time: 'Now'
    };
    newAlert.id = Date.now();
    state.alerts.unshift(newAlert);
    state.auditLogs.unshift({ description: `Admin created alert: ${newAlert.type}`, time: 'Just now' });
    syncSystem.notify('alert_created', newAlert);
    alert('Emergency alert created.');
    elements.alertForm.reset();
    saveToLocalStorage();
    renderSectionData();
  });

  if (elements.contentForm) {
    elements.contentForm.addEventListener('submit', event => {
      event.preventDefault();
      const title = elements.contentTitle.value.trim();
      const text = elements.contentText.value.trim();
      if (!title || !text) {
        alert('Please enter both title and text for the content item.');
        return;
      }
      const newContent = {
        title,
        text
      };
      state.contentItems.unshift(newContent);
      state.auditLogs.unshift({ description: `Admin added new content: ${title}`, time: 'Just now' });
      saveToLocalStorage();
      elements.contentForm.reset();
      renderSectionData();
      alert('Content added successfully.');
    });
  }

  if (elements.downloadPdfBtn) {
    elements.downloadPdfBtn.addEventListener('click', event => {
      event.preventDefault();
      handleDownloadPdf();
    });
  }

  if (elements.downloadExcelBtn) {
    elements.downloadExcelBtn.addEventListener('click', event => {
      event.preventDefault();
      handleDownloadExcel();
    });
  }
  const printReportsBtn = document.getElementById('printReportsBtn');
  if (printReportsBtn) {
    printReportsBtn.addEventListener('click', event => {
      event.preventDefault();
      handlePrintReports();
    });
  }
  
  // Modal event listeners
  elements.closeModalBtn.addEventListener('click', closeIncidentModal);
  elements.closeModalBtn2.addEventListener('click', closeIncidentModal);
  elements.updateIncidentBtn.addEventListener('click', updateIncidentFromModal);
  elements.incidentModal.addEventListener('click', event => {
    if (event.target === elements.incidentModal) {
      closeIncidentModal();
    }
  });
  
  const restoredSession = restoreActiveSession();
  updateTopbarProfile();
  renderSidebar();
  renderSectionData();
  if (restoredSession) {
    showAppShell();
    showSection(state.currentSection);
  } else {
    showLoginScreen();
    showSection('dashboard');
  }

  // Cross-tab sync: listen for storage changes so admin in other tabs sees new reports immediately
  window.addEventListener('storage', (e) => {
    if (!e.key) return;
    if (e.key === 'sindangan_state' || e.key === 'sindangan_state_lastUpdate') {
      loadFromLocalStorage();
      // Re-render everything relevant
      renderDashboard();
      renderSectionData();
    }
  });
}

init();
