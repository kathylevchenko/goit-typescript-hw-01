export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  type RolesDescription = Record<UserRole, string>;
  
  const RoleDescription :RolesDescription= {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  };