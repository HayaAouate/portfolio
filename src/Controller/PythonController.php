<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PythonController extends AbstractController
{
    #[Route('/python', name: 'app_python')]
    public function index(): Response
    {
        return $this->render('python/index.html.twig', [
            'controller_name' => 'PythonController',
        ]);
    }
}
