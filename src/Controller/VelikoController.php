<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class VelikoController extends AbstractController
{
    #[Route('/veliko', name: 'app_veliko')]
    public function index(): Response
    {
        return $this->render('veliko/index.html.twig', [
            'controller_name' => 'VelikoController',
        ]);
    }
}
