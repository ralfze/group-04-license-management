package com.example.licensemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@SpringBootApplication
@EntityScan("com.example.licensemanagement.Entity")
@Configuration
public class LicenseManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(LicenseManagementApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        /*
         * // deprecated way to allow authorization at http
         * http.authorizeRequests()
         * .anyRequest().permitAll()
         * .and()
         * .csrf().disable(); // Disable CSRF for simplicity, you might want to enable
         * it in a production environment
         */
        // Allow authorization on http
        http.authorizeHttpRequests((authorizeRequests) -> authorizeRequests.anyRequest().permitAll());
        // Allow cors
        http.cors(cors -> cors.disable());
        // Allow crsf
        http.csrf(csrf -> csrf.disable());
        return http.build();
    }

    /*
     * @Bean
     * public CorsConfigurationSource corsConfigurationSource() {
     * CorsConfiguration configuration = new CorsConfiguration();
     * configuration.addAllowedOrigin("*"); // or specify your frontend origin
     * configuration.addAllowedMethod("*");
     * configuration.addAllowedHeader("*");
     * configuration.setAllowCredentials(true);
     * 
     * UrlBasedCorsConfigurationSource source = new
     * UrlBasedCorsConfigurationSource();
     * source.registerCorsConfiguration("/**", configuration);
     * return source;
     * }
     */
}
