import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

export const AuthUI = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Welcome to Visit Slovenia
      </h2>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#22c55e',
                brandAccent: '#16a34a',
              },
            },
          },
        }}
        providers={["google", "github"]}
        localization={{
          variables: {
            sign_up: {
              password_input_label: "Password (minimum 6 characters)",
              password_input_placeholder: "Enter your password (min. 6 characters)",
            },
          },
        }}
      />
    </div>
  );
};