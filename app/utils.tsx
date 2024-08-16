// utils/redirectToDashboard.ts

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const redirectToDashboard = async (router: AppRouterInstance, userRole: string) => {
  switch (userRole) {
    case 'cliente':
      await router.push('/dashboard/cliente');
      break;
    case 'experto':
      await router.push('/dashboard/experto');
      break;
    case 'administrador':
      await router.push('/dashboard/administracion');
      break;
    default:
      await router.push('/login'); // Si no hay rol válido, redirigir a login
      break;
  }
};